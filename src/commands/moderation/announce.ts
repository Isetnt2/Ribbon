/**
 * @file Moderation NewsCommand - Make an announcement to a channel named "announcements" or "news"
 *
 * **Aliases**: `news`
 * @module
 * @category moderation
 * @name announce
 * @example announce Pokemon Switch has released!
 * @param {StringResolvable} Announcement The announcement you want to make
 */

import { oneLine, stripIndents } from 'common-tags';
import { MessageEmbed, TextChannel } from 'discord.js';
import { Command, CommandoClient, CommandoMessage } from 'discord.js-commando';
import * as moment from 'moment';
import {
    deleteCommandMessages,
    modLogMessage,
    startTyping,
    stopTyping,
} from '../../components';

export default class NewsCommand extends Command {
    constructor(client: CommandoClient) {
        super(client, {
            name: 'announce',
            aliases: ['news'],
            group: 'moderation',
            memberName: 'announce',
            description: 'Make an announcement in the news channel',
            format: 'Announcement',
            examples: ['announce John Appleseed reads the news'],
            guildOnly: true,
            userPermissions: ['ADMINISTRATOR'],
            throttling: {
                usages: 2,
                duration: 3,
            },
            args: [
                {
                    key: 'body',
                    prompt: 'What do you want me to announce?',
                    type: 'string',
                },
            ],
        });
    }

    public run(msg: CommandoMessage, { body }: { body: string }) {
        try {
            startTyping(msg);

            let announce = body;
            let newsChannel: TextChannel = null;

            const announceEmbed = new MessageEmbed();
            const modlogChannel = msg.guild.settings.get('modlogchannel', null);

            if (msg.guild.settings.get('announcechannel')) {
                newsChannel = msg.guild.channels.find(
                    (c: TextChannel) =>
                        c.id === msg.guild.settings.get('announcechannel')
                ) as TextChannel;
            } else {
                msg.guild.channels.find(
                    (c: TextChannel) => c.name === 'announcements'
                )
                    ? (newsChannel = msg.guild.channels.find(
                          (c: TextChannel) => c.name === 'announcements'
                      ) as TextChannel)
                    : (newsChannel = msg.guild.channels.find(
                          (c: TextChannel) => c.name === 'news'
                      ) as TextChannel);
            }

            if (!newsChannel) throw new Error('nochannel');
            if (
                !newsChannel
                    .permissionsFor(msg.guild.me)
                    .has(['SEND_MESSAGES', 'VIEW_CHANNEL'])
            ) {
                throw new Error('noperms');
            }

            newsChannel.startTyping(1);

            if (announce.slice(0, 4) !== 'http') {
                announce = `${body.slice(0, 1).toUpperCase()}${body.slice(1)}`;
            }
            if (msg.attachments.first() && msg.attachments.first().url) {
                announce += `\n${msg.attachments.first().url}`;
            }

            announceEmbed
                .setColor('#AAEFE6')
                .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
                .setDescription(
                    stripIndents`
                    **Action:** Made an announcement
                    **Content:** ${announce}`
                )
                .setTimestamp();

            newsChannel.send(announce);
            newsChannel.stopTyping(true);

            if (msg.guild.settings.get('modlogs', true)) {
                modLogMessage(
                    msg,
                    msg.guild,
                    modlogChannel,
                    msg.guild.channels.get(modlogChannel) as TextChannel,
                    announceEmbed
                );
            }

            deleteCommandMessages(msg, this.client);
            stopTyping(msg);

            return msg.embed(announceEmbed);
        } catch (err) {
            stopTyping(msg);

            if (/(?:nochannel)/i.test(err.toString())) {
                return msg.reply(
                    'there is no channel for me to make the announcement in. Create channel named either `announcements` or `news`'
                );
            } else if (/(?:noperms)/i.test(err.toString())) {
                return msg.reply(
                    'I do not have permission to send messages to the `announcements` or `news` channel. Better go fix that!'
                );
            }

            const channel = this.client.channels.get(
                process.env.ISSUE_LOG_CHANNEL_ID
            ) as TextChannel;

            channel.send(stripIndents`
                <@${
                    this.client.owners[0].id
                }> Error occurred in \`warn\` command!
                **Server:** ${msg.guild.name} (${msg.guild.id})
                **Author:** ${msg.author.tag} (${msg.author.id})
                **Time:** ${moment(msg.createdTimestamp).format(
                    'MMMM Do YYYY [at] HH:mm:ss [UTC]Z'
                )}
                **Input:** ${body}
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
