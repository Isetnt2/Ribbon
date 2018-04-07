/*
 *   This file is part of Ribbon
 *   Copyright (C) 2017-2018 Favna
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, version 3 of the License
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 *   Additional Terms 7.b and 7.c of GPLv3 apply to this file:
 *       * Requiring preservation of specified reasonable legal notices or
 *         author attributions in that material or in the Appropriate Legal
 *         Notices displayed by works containing it.
 *       * Prohibiting misrepresentation of the origin of that material,
 *         or requiring that modified versions of such material be marked in
 *         reasonable ways as different from the original version.
 */

/**
 * @file Casino DailyCommand - Receive your daily 500 chips top up  
 * **Aliases**: `topup`, `bonus`
 * @author Jeroen Claassens (favna) <sharkie.jeroen@gmail.com>
 * @module
 * @category casino
 * @name daily
 * @returns {MessageEmbed} Your new balance
 */

const {MessageEmbed} = require('discord.js'),
  Database = require('better-sqlite3'),
  commando = require('discord.js-commando'),
  moment = require('moment'),
  path = require('path'),
  {oneLine, stripIndents} = require('common-tags'), 
  {deleteCommandMessages} = require('../../util.js');

module.exports = class DailyCommand extends commando.Command {
  constructor (client) {
    super(client, {
      'name': 'daily',
      'memberName': 'daily',
      'group': 'casino',
      'aliases': ['topup', 'bonus'],
      'description': 'Receive your daily cash top up of 500 chips',
      'guildOnly': true,
      'throttling': {
        'usages': 2,
        'duration': 3
      }
    });
  }

  run (msg) {
    const balEmbed = new MessageEmbed(),
      conn = new Database(path.join(__dirname, '../../data/databases/casino.sqlite3'));
    
    let returnMsg = '';

    balEmbed
      .setAuthor(msg.member.displayName, msg.author.displayAvatarURL({'format': 'png'}))
      .setColor(msg.guild ? msg.guild.me.displayHexColor : '#A1E7B2')
      .setThumbnail('https://favna.xyz/images/ribbonhost/casinologo.png');

    try {
      const query = conn.prepare(`SELECT * FROM "${msg.guild.id}" WHERE userID = ?;`).get(msg.author.id);

      if (query) {
        const topupdate = moment(query.lasttopup).add(24, 'hours'),
          dura = moment.duration(topupdate.diff()); // eslint-disable-line sort-vars

        let chipStr = '',
          resetStr = '';

        if (dura.asHours() <= 0) {
          conn.prepare(`UPDATE "${msg.guild.id}" SET balance=$balance, lasttopup=$date WHERE userID="${msg.author.id}";`).run({
            'balance': query.balance + 500,
            'date': moment().format('YYYY-MM-DD HH:mm')
          });

          chipStr = `${query.balance} ➡ ${query.balance + 500}`;
          resetStr = 'in 24 hours';
          returnMsg = 'Topped up your balance with your daily 500 chips!';
        } else {
          chipStr = query.balance;
          resetStr = dura.format('[in] HH[ hour(s) and ]mm[ minute(s)]');
          returnMsg = 'Sorry but you are not due to get your daily chips yet, here is your current balance';
        }

        balEmbed.setDescription(stripIndents`
        **Balance**
        ${chipStr}
        **Daily Reset**
        ${resetStr}`);

        deleteCommandMessages(msg, this.client);

        return msg.embed(balEmbed, returnMsg);
      }
      conn.prepare(`INSERT INTO "${msg.guild.id}" VALUES ($userid, $balance, $date);`).run({
        'userid': msg.author.id,
        'balance': '500',
        'date': moment().format('YYYY-MM-DD HH:mm')
      });
    } catch (e) {
      if (/(?:no such table)/i.test(e.toString())) {
        conn.prepare(`CREATE TABLE IF NOT EXISTS "${msg.guild.id}" (userID TEXT PRIMARY KEY, balance INTEGER, lasttopup TEXT);`).run();

        conn.prepare(`INSERT INTO "${msg.guild.id}" VALUES ($userid, $balance, $date);`).run({
          'userid': msg.author.id,
          'balance': '500',
          'date': moment().format('YYYY-MM-DD HH:mm')
        });
      } else {
        console.error(`	 ${stripIndents`Fatal SQL Error occurred while topping up someones balance!
        Server: ${msg.guild.name} (${msg.guild.id})
        Author: ${msg.author.tag} (${msg.author.id})
        Time: ${moment(msg.createdTimestamp).format('MMMM Do YYYY [at] HH:mm:ss [UTC]Z')}
        Error Message:`} ${e}`);

        return msg.reply(oneLine`Fatal Error occurred that was logged on Favna\'s system.
                You can contact him on his server, get an invite by using the \`${msg.guild.commandPrefix}invite\` command `);
      }
    }

    balEmbed.setDescription(stripIndents`
    **Balance**
    500
    **Daily Reset**
    in 24 hours`);

    deleteCommandMessages(msg, this.client);

    return msg.embed(balEmbed, 'You didn\'t have any chips yet so here\'s your first 500. Spend them wisely!');
  }
};