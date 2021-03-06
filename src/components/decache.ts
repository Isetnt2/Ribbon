/**
 * @file Ribbon Decache - Decache modules loaded in Node
 * @author Jeroen Claassens (favna) <sharkie.jeroen@gmail.com>
 * @copyright © 2017-2018 Favna
 */
/* tslint:disable:no-dynamic-delete no-conditional-assignment*/

import * as path from 'path';

const find = (moduleName: string) => {
    try {
        return require.resolve(moduleName);
    } catch (e) {
        return null;
    }
};

const searchCache = (moduleName: string, callback: (arg: any) => void) => {
    let mod = require.resolve(moduleName);
    const visited: any = {};

    if (mod && (mod = require.cache[mod]) !== undefined) {
        const run = (current: any) => {
            visited[current.id] = true;

            current.children.forEach((child: any) => {
                if (
                    path.extname(child.filename) !== '.node' &&
                    !visited[child.id]
                ) {
                    run(child);
                }
            });

            callback(current);
        };

        run(mod);
    }
};

export const decache = (moduleName: string) => {
    moduleName = find(moduleName);

    if (!moduleName) return null;

    searchCache(moduleName, mod => {
        delete require.cache[mod.id];
    });

    // @ts-ignore
    return Object.keys(module.constructor._pathCache).forEach(cacheKey => {
        if (cacheKey.indexOf(moduleName) > 0) {
            // @ts-ignore
            delete module.constructor._pathCache[cacheKey];
        }
    });
};
