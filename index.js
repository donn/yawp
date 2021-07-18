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
import antlr4 from 'antlr4';
import VCDLexer from './antlr_build/vcdLexer.js';
import VCDParser from './antlr_build/vcdParser.js';
import { ParseTreeWalker } from 'antlr4/src/antlr4/tree/Tree.js';
import { ErrorListener } from 'antlr4/src/antlr4/error/ErrorListener.js';
import Listener from './listener.js';

class ErrorTracker extends ErrorListener {
    constructor(errorList, ...args) {
        super(...args)
        this.errorList = errorList;
    }
    syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
        this.errorList.push({ line: line, column: column, err: err });
    }
}

export default function parse(input) {
    const chars = new antlr4.InputStream(input);

    let errorList = [];
    let errorTracker = new ErrorTracker(errorList);

    const lexer = new VCDLexer(chars);
    lexer.removeErrorListeners();
    lexer.addErrorListener(errorTracker);
    
    const tokens = new antlr4.CommonTokenStream(lexer);

    const parser = new VCDParser(tokens);
    parser.removeErrorListeners();
    parser.addErrorListener(errorTracker);

    parser.buildParseTrees = true;

    const tree = parser.top();

    if (errorList.length) {
        let error = new Error("Failed to parse VCD file.");
        error.list = errorList;
        throw error;
    }
    
    let listener = new Listener(parser);
    ParseTreeWalker.DEFAULT.walk(listener, tree);
    return listener.result;
}
