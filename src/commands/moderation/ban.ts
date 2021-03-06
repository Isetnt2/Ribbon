/**
 * @file Moderation BanCommand - Ban a bad member
 *
 * **Aliases**: `b`, `banana`
 * @module
 * @category moderation
 * @name ban
 * @example ban MultiMegaMander
 * @param {GuildMemberResolvable} AnyMember The member to ban from the server
 * @param {StringResolvable} [TheReason] Reason for this banishment. Include `--no-delete` anywhere in the reason to
 *     prevent Ribbon from deleting the banned member's messages
 */

import { stripIndents } from 'common-tags';
import { GuildMember, MessageEmbed, TextChannel } from 'discord.js';
import { Command, CommandoClient, CommandoMessage } from 'discord.js-commando';
import {
    deleteCommandMessages,
    modLogMessage,
    startTyping,
    stopTyping,
} from '../../components';

export default class BanCommand extends Command {
    constructor(client: CommandoClient) {
        super(client, {
            name: 'ban',
            aliases: ['b', 'banana'],
            group: 'moderation',
            memberName: 'ban',
            description: 'Bans a member from the server',
            format: 'MemberID|MemberName(partial or full) [ReasonForBanning]',
            examples: ['ban JohnDoe annoying'],
            guildOnly: true,
            clientPermissions: ['BAN_MEMBERS'],
            userPermissions: ['BAN_MEMBERS'],
            throttling: {
                usages: 2,
                duration: 3,
            },
            args: [
                {
                    key: 'member',
                    prompt: 'Which member should I ban?',
                    type: 'member',
                },
                {
                    key: 'reason',
                    prompt: 'What is the reason for this banishment?',
                    type: 'string',
                    default: '',
                },
            ],
        });
    }

    public run(
        msg: CommandoMessage,
        {
            member,
            reason,
            keepmessages,
        }: { member: GuildMember; reason: string; keepmessages: boolean }
    ) {
        startTyping(msg);
        if (member.id === msg.author.id) {
            stopTyping(msg);

            return msg.reply("I don't think you want to ban yourself.");
        }

        if (!member.bannable) {
            stopTyping(msg);

            return msg.reply(
                'I cannot ban that member, their role is probably higher than my own!'
            );
        }

        if (/--nodelete/im.test(msg.argString)) {
            reason =
                reason.substring(0, reason.indexOf('--nodelete')) +
                reason.substring(
                    reason.indexOf('--nodelete') + '--nodelete'.length + 1
                );
            keepmessages = true;
        }

        member.ban({
            days: keepmessages ? 0 : 1,
            reason: reason !== '' ? reason : 'No reason given by staff',
        });

        const banEmbed = new MessageEmbed();
        const modlogChannel = msg.guild.settings.get('modlogchannel', null);

        banEmbed
            .setColor('#FF1900')
            .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
            .setDescription(
                stripIndents`
                **Member:** ${member.user.tag} (${member.id})
                **Action:** Ban
                **Reason:** ${
                    reason !== '' ? reason : 'No reason given by staff'
                }`
            )
            .setTimestamp();

        if (msg.guild.settings.get('modlogs', true)) {
            modLogMessage(
                msg,
                msg.guild,
                modlogChannel,
                msg.guild.channels.get(modlogChannel) as TextChannel,
                banEmbed
            );
        }

        deleteCommandMessages(msg, this.client);
        stopTyping(msg);

        return msg.embed(banEmbed);
    }
}
