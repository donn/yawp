#!/usr/bin/env node
/*
 * Copyright 2021 Mohamed Gaber
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import parse from "../index.js";
import fs from "fs";

async function main() {
    if (process.argv.length != 3) {
        console.error(`Usage: ${process.argv.slice(0, 2)} <input vcd>`)
        return 64;
    }
    const input = await fs.promises.readFile(process.argv[2], "utf8");
    try {
        let jso = parse(input);
        console.log(JSON.stringify(jso, null, 4));
    } catch (err) {
        console.error(err.message);
        return 65;
    }
    return 0;
}
main().then(ec=> process.exit(ec));