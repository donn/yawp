import antlr4 from 'antlr4';
import VCDLexer from './build/vcdLexer.js';
import VCDParser from './build/vcdParser.js';
import VCDListener from './build/vcdListener.js';
import fs from 'fs';


const input = fs.readFileSync(process.argv[2], "utf8");
const chars = new antlr4.InputStream(input);
const lexer = new VCDLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new VCDParser(tokens);
parser.buildParseTrees = true;
const tree = parser.top();

class Visitor {
  visitChildren(ctx) {
    if (!ctx) {
        return null;
    }
    if (!ctx.children) {
        return null;
    }
    return ctx.children.map(child => {
        if (!child.children || child.children.length == 0) {
            // Leaf
            return child.getText();
        }
        return child.accept(this); // Recurse
    });
  }
}

let res = tree.accept(new Visitor());
let output = JSON.stringify(res, null, 4);

fs.writeFileSync("out.json", output);

