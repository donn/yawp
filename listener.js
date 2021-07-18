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
import VCDListener from './antlr_build/vcdListener.js';

export default class Listener extends VCDListener {
    constructor(...args) {
        super(...args)
        this.result = {};
        this.variables = {};
        this.namespaces = [];
        this.currentTime = 0;
    }

    exitText_declaration(node) {
        let [start, value, _] = node.children.map(c=> c.getText());

        this.result[start.slice(1)] = value.trim();
    }

    exitScope_declaration(node) {
        let [start, type, id, text] = node.children.map(c=> c.getText());
        this.namespaces.push(id);
    }

    exitUpscope_declaration(node) {
        this.namespaces.pop();
    }

    exitVariable_declaration(node) {
        let [startn, typen, widthn, sidn, idn, busn, endn] = node.children;
        if (endn === undefined) {
            endn = busn;
            busn = undefined;
        }
        
        let id = idn.getText().trim();
        if (id.startsWith("\\")) {
            id = id.slice(1);
        }

        let msb, lsb;
        if (busn !== undefined) {
            let [startn, msbn, colonn, lsbn, endn] = busn.children;
            msb = parseInt(msbn.getText());
            lsb = parseInt(lsbn.getText());
        }

        let namespaces = id.split(".");
        let name = namespaces[namespaces.length - 1];
        namespaces = this.namespaces.concat(namespaces.slice(0, -1));

        let sid = sidn.getText();

        let variable = {
            name: name,
            sid,
            type: typen.getText(),
            msb,
            lsb,
            width: parseInt(widthn.getText()),
            namespaces: namespaces,
            waveform: []
        };
        this.variables[sid] = variable;
    }

    exitTimestamp(node) {
        let time = node.children[0].getText().slice(1);
        this.currentTime = parseInt(time); 
    }

    exitCommand_value_change(node) {
        let [value, sid] = node.children.map(c=> c.getText());
        if (value.startsWith("b")) {
            value = value.slice(1);
        }
        if (value.startsWith("r")) {
            value = value.slice(1);
        }
        value = value.trim().toLowerCase();
        this.variables[sid].waveform.push([this.currentTime, value]);
    }

    exitTop(node) {
        let top = { signals: [], hierarchy: {} };

        for (let variable of Object.values(this.variables)) {
            let current = top;
            for (let namespace of variable.namespaces) {
                if (!current.hierarchy[namespace]) {
                    current.hierarchy[namespace] = { signals: [], hierarchy: {} };
                }
                current = current.hierarchy[namespace];
            }
            current.signals.push(variable);
        }

        this.result.top = top;
        this.result.finalTime = this.currentTime; 
    }
}