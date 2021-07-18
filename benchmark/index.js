const FAILED_SYMBOL = '❌';
const TIMEOUT_SYMBOL = '⚠️';

async function main() {
    const yawp = (await import("../index.js")).default;
    const VCDParser = require("vcd-parser");

    const fs = require("fs");
    const path = require("path");
    const { exec } = require("child_process");

    const dir = process.env.TEST_DIRECTORY;
    const vvcdpPath = process.env.VVCDP_PATH;

    let parsers = [
        {
            name: "YAWP",
            link: "#",
            exec: async (inputPath) => {
                let input = fs.readFileSync(inputPath, "utf8");
                await yawp(input);
            }
        },
        {
            name: "Verilog VCD Parser",
            link: "https://github.com/ben-marshall/verilog-vcd-parser/tree/d9be54497618168d7bab49648344df98f42a7f52",
            exec: async (inputPath)=> {
                await new Promise((resolve, reject)=> {
                    exec(`${vvcdpPath} ${inputPath}`, (err, stdout, stderr)=> {
                        if (err) {
                            return reject(stderr);
                        }
                        return resolve();
                    })
                });
            }
        },
        {
            name: "VCDParser",
            link: "https://github.com/ahmed-agiza/vcd-parser/tree/acdf3dd38bfcd9451b55f95af22591e20c173d30",
            exec: async (inputPath) => {
                let input = fs.readFileSync(inputPath, "utf8");
                await VCDParser.parse(input);
            }
        },
    ];

    let table = `Test|Size (Bytes)|${parsers.map(parser=>
        `[${parser.name}](${parser.link})`
    ).join("|")}\n`
    table += `-|-|${parsers.map(_=> "-").join("|")}\n`;

    let tests = fs.readdirSync(dir);
    tests = tests.map(test=> {
        let testpath = path.join(dir, test);
        let stat = fs.lstatSync(testpath);
        let size = stat.size;
        return {
            name: test,
            path: testpath,
            size
        };
    })

    tests.sort((a, b)=> a.size - b.size);

    for (let test of tests) {
        let { name, path, size } = test;

        let results = [];

        for (let parser of parsers) {
            let time = FAILED_SYMBOL;
            try {
                console.error(`${parser.name} // ${name}…`)
                let start = Date.now();
                let result = await Promise.race([
                    parser.exec(path),
                    new Promise(r=> setTimeout(_=> r("TIMEOUT"), 300000))
                ]);
                if (result === "TIMEOUT") {
                    time = TIMEOUT_SYMBOL;
                    console.error(`Timed out.`);
                } else {
                    time = `${(Date.now() - start) / 1000}s`;
                    console.error(`Done in ${time}.`)
                }
            } catch (error) {
                console.error(`${parser.name} failed to parse ${name}: ${error}.`)
            }
            results.push(time);
        }

        table += `${name}|${size}|${results.join("|")}\n`

    }

    console.log(`\
# Benchmark
This compares YAWP with the two other free VCD parsers I found and didn't find suitable.

${table}

${FAILED_SYMBOL}: That parser has failed to parse this file.

${TIMEOUT_SYMBOL}: That parser has exceeded 300 seconds when parsing this test.
`);
process.exit(0)
}

main();