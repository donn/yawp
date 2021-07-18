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
grammar vcd;

options { tokenVocab=vcdLexer; }

top: declaration+ end_definitions_declaration command+ EOF;

declaration: 
    text_declaration
    | scope_declaration
    | upscope_declaration
    | variable_declaration
    ;

text_declaration:
    TextDeclarationStart Text DeclarationEnd
    ;

variable_declaration:
    VarDeclarationStart VType VDecimal ShortID VIdentifier bus? VDeclarationEnd
    ;

bus:
    VBusStart VBusDecimal VBusColon VBusDecimal VBusEnd;
    
scope_declaration:
    ScopeDeclarationStart SType SIdentifier DeclarationEnd
    ;

upscope_declaration:
    UpscopeDeclarationStart DeclarationEnd
    ;

end_definitions_declaration:
    EndDefinitionsDeclaration DEDeclarationEnd
    ;

command:
    timestamp
    | command_value_change
    | CKeyword command_value_change* CDeclarationEnd
    ;

timestamp:
    CTimestamp
    ;

command_value_change:
    CBit ShortID
    | CBitVector ShortID
    | CReal ShortID
    ;
    