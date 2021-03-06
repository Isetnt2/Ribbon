/**
 * @file Moderation TimerRemoveCommand - Remove a specified timed message
 *
 * Use the timerlist command to find the ID for deleting
 *
 * **Aliases**: `timeremove`, `timerdelete`, `timedelete`
 * @module
 * @category moderation
 * @name timerremove
 * @example timerremove 1
 * @param {StringResolvable} TimerID The ID of the timed message to remove
 */

import * as Database from 'better-sqlite3';
import { oneLine, stripIndents } from 'common-tags';
import { MessageEmbed, TextChannel } from 'discord.js';
import { Command, CommandoClient, CommandoMessage } from 'discord.js-commando';
import * as moment from 'moment';
import * as path from 'path';
import {
    deleteCommandMessages,
    modLogMessage,
    ms,
    startTyping,
    stopTyping,
} from '../../components';

export default class TimerRemoveCommand extends Command {
    constructor(client: CommandoClient) {
        super(client, {
            name: 'timerremove',
            aliases: ['timeremove', 'timerdelete', 'timedelete'],
            group: 'moderation',
            memberName: 'timerremove',
            description: 'Remove a specified timed message',
            format: 'TimerID',
            details: 'Use the timerlist command to find the ID for deleting',
            examples: ['timerremove 1'],
            guildOnly: true,
            userPermissions: ['MANAGE_MESSAGES'],
            throttling: {
                usages: 2,
                duration: 3,
            },
            args: [
                {
                    key: 'id',
                    prompt: 'Which timed message should I delete?',
                    type: 'integer',
                },
            ],
        });
    }

    public run(msg: CommandoMessage, { id }: { id: number }) {
        const conn = new Database(
            path.join(__dirname, '../../data/databases/timers.sqlite3')
        );

        try {
            startTyping(msg);
            const rows = conn
                .prepare(`SELECT id FROM "${msg.guild.id}";`)
                .all();
            const validIDs = [];

            for (const row in rows) {
                validIDs.push(rows[row].id);
            }

            if (!validIDs.includes(id)) {
                stopTyping(msg);

                return msg.reply(
                    `that is not an ID of a message stored for this guild. You can view all the stored messages with the \`${
                        msg.guild.commandPrefix
                    }timerlist\` command`
                );
            }
        } catch (err) {
            stopTyping(msg);
            if (/(?:no such table)/i.test(err.toString())) {
                return msg.reply(
                    `no timed messages found for this server. Start saving your first with ${
                        msg.guild.commandPrefix
                    }timeradd`
                );
            }
            const channel = this.client.channels.get(
                process.env.ISSUE_LOG_CHANNEL_ID
            ) as TextChannel;

            channel.send(stripIndents`
                <@${
                    this.client.owners[0].id
                }> Error occurred in validating the ID for the \`timerremove\` command!
                **Server:** ${msg.guild.name} (${msg.guild.id})
                **Author:** ${msg.author.tag} (${msg.author.id})
                **Time:** ${moment(msg.createdTimestamp).format(
                    'MMMM Do YYYY [at] HH:mm:ss [UTC]Z'
                )}
                **Error Message:** ${err}
            `);

            return msg.reply(oneLine`An error occurred but I notified ${
                this.client.owners[0].username
            }
                Want to know more about the error? Join the support server by getting an invite by using the \`${
                    msg.guild.commandPrefix
                }invite\` command `);
        }

        try {
            const modlogChannel = msg.guild.settings.get('modlogchannel', null);
            const timedMessage = conn
                .prepare(`SELECT * from "${msg.guild.id}" WHERE id=$id`)
                .get({ id });
            const timerRemoveEmbed = new MessageEmbed();

            conn.prepare(`DELETE FROM "${msg.guild.id}" WHERE id=$id`).run({
                id,
            });

            timerRemoveEmbed
                .setColor('#F7F79D')
                .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
                .setDescription(
                    stripIndents`
                    **Action:** Timed message removed
                    **Interval:** ${ms(timedMessage.interval, { long: true })}
                    **Channel:** <#${timedMessage.channel}>
                    **Message:** ${timedMessage.content}`
                )
                .setTimestamp();

            if (msg.guild.settings.get('modlogs', true)) {
                modLogMessage(
                    msg,
                    msg.guild,
                    modlogChannel,
                    msg.guild.channels.get(modlogChannel) as TextChannel,
                    timerRemoveEmbed
                );
            }

            deleteCommandMessages(msg, this.client);
            stopTyping(msg);

            return msg.embed(timerRemoveEmbed);
        } catch (err) {
            if (/(?:no such table)/i.test(err.toString())) {
                return msg.reply(
                    `no timed messages found for this server. Start saving your first with ${
                        msg.guild.commandPrefix
                    }timeradd`
                );
            }
            const channel = this.client.channels.get(
                process.env.ISSUE_LOG_CHANNEL_ID
            ) as TextChannel;

            channel.send(stripIndents`
                <@${
                    this.client.owners[0].id
                }> Error occurred in removing message in the \`timerremove\` command!
                **Server:** ${msg.guild.name} (${msg.guild.id})
                **Author:** ${msg.author.tag} (${msg.author.id})
                **Time:** ${moment(msg.createdTimestamp).format(
                    'MMMM Do YYYY [at] HH:mm:ss [UTC]Z'
                )}
                **Error Message:** ${err}
            `);

            return msg.reply(oneLine`An error occurred but I notified ${
                this.client.owners[0].username
            }
                Want to know more about the error? Join the support server by getting an invite by using the \`${
                    msg.guild.commandPrefix
                }invite\` command `);
        }
    }
}
