grammar vcd;

options { tokenVocab=vcdlexer; }

top: declaration* end_definitions_declaration command+ EOF;

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
    CTimestamp
    | command_value_change
    | CKeyword command_value_change* CDeclarationEnd
    ;

command_value_change:
    CBit ShortID
    | CBitVector ShortID
    | CReal ShortID
    ;
    