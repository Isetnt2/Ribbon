/* tslint:disable:no-unused-expression no-implicit-dependencies*/

import * as Database from 'better-sqlite3';
import { expect } from 'chai';
import { Client, SyncSQLiteProvider } from 'discord.js-commando';
import { suite, test } from 'mocha-typescript';
import * as path from 'path';

suite('Connect & Disconnect bot', () => {
    test('should connect then disconnect', () => {
        const client = new Client({
            commandPrefix: 's!!',
            owner: '268792781713965056',
            unknownCommandResponse: false,
            typescript: true,
        });
        const db = new Database(path.join(__dirname, '../src/data/databases/settings.sqlite3'));

        client.setProvider(new SyncSQLiteProvider(db));
        let readyTracker = false;

        client.registry.registerDefaults();
        client.login(process.env.TEST_TOKEN);

        client.on('ready', () => {
            readyTracker = true;
            client.destroy();
            process.exit();
            expect(readyTracker).to.equal(true);
        });
    });
});