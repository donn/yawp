lexer grammar vcdlexer;

//mode DEFAULT_MODE;
    DMWhitespace: Whitespace+ -> skip;

    TextDeclarationStart: ('$date' | '$version' | '$timescale') -> pushMode(text);

    VarDeclarationStart: '$var' -> pushMode(variable);

    ScopeDeclarationStart: '$scope' -> pushMode(scope);

    UpscopeDeclarationStart: '$upscope';

    EndDefinitionsDeclaration: '$enddefinitions' -> pushMode(def_end);

    DeclarationEnd: '$end';

mode text;
    Text: ~('$')+ -> popMode;

// Var
mode variable;
    VDWhitespace: Whitespace+ -> skip;
    VType: 'wire' | 'reg' | 'integer' | 'real';
    VDecimal: Digit+ -> pushMode(var_shortid);

    VIdentifier: VerilogIdentifier;

    VBusStart: '[' -> pushMode(variable_bus);

    VDeclarationEnd: '$end' -> popMode;

mode variable_bus;
    VBusWhitespace: Whitespace+ -> skip;
    VBusDecimal: Digit+;
    VBusColon: ':';
    VBusEnd: ']' -> popMode;

mode var_shortid;
    SIDWhitespace: Whitespace+ -> skip;
    ShortID: NonWhitespace+ -> popMode;

// Scope
mode scope;
    SWhitespace: Whitespace+ -> skip;
    SType: 'module' | 'begin' | 'task';
    SIdentifier: NonWhitespace+ -> popMode;

// Mode
mode def_end;
    DEWhitespace: Whitespace+ -> skip;
    DEDeclarationEnd: '$end' ('\t'|'\n'|' ')* -> pushMode(cmd);

// Commands
mode cmd;
    CWhitespace: Whitespace+ -> skip;
    CTimestamp: '#' Digit+;
    CBit: Bit -> pushMode(var_shortid);
    CBitVector: 'b' Bit+ Whitespace -> pushMode(var_shortid);
    CReal: 'r' Digit+ ('.' Digit+)? Whitespace -> pushMode(var_shortid);
    CKeyword: '$dumpall' | '$dumpvars' | '$dumpon' | '$dumpoff';
    CDeclarationEnd: '$end';


// Common
    fragment Bit: ('x' | 'X' | 'z' | 'Z' | '0' | '1');
    fragment VerilogIdentifier: Identifier | ('\\' NonWhitespace+ Whitespace);
    fragment Whitespace: (' ' | '\t' | '\n');
    fragment NonWhitespace: ~(' ' | '\t' | '\n');
    fragment Identifier: Nondigit ( Nondigit | Digit )* ;
    fragment Nondigit: [a-zA-Z_];
    fragment Digit: [0-9];