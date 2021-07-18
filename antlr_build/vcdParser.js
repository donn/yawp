// Generated from vcd.g by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import vcdListener from './vcdListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\"a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0003\u0002\u0006\u0002\u001a\n\u0002\r\u0002\u000e\u0002\u001b\u0003",
    "\u0002\u0003\u0002\u0006\u0002 \n\u0002\r\u0002\u000e\u0002!\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "*\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "6\n\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\n\u0003\n\u0007\nO\n\n\f\n\u000e\nR\u000b\n",
    "\u0003\n\u0005\nU\n\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0005\f_\n\f\u0003\f\u0002\u0002\r\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0002\u0002\u0002`",
    "\u0002\u0019\u0003\u0002\u0002\u0002\u0004)\u0003\u0002\u0002\u0002",
    "\u0006+\u0003\u0002\u0002\u0002\b/\u0003\u0002\u0002\u0002\n9\u0003",
    "\u0002\u0002\u0002\f?\u0003\u0002\u0002\u0002\u000eD\u0003\u0002\u0002",
    "\u0002\u0010G\u0003\u0002\u0002\u0002\u0012T\u0003\u0002\u0002\u0002",
    "\u0014V\u0003\u0002\u0002\u0002\u0016^\u0003\u0002\u0002\u0002\u0018",
    "\u001a\u0005\u0004\u0003\u0002\u0019\u0018\u0003\u0002\u0002\u0002\u001a",
    "\u001b\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001b",
    "\u001c\u0003\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002\u0002\u001d",
    "\u001f\u0005\u0010\t\u0002\u001e \u0005\u0012\n\u0002\u001f\u001e\u0003",
    "\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002",
    "\u0002!\"\u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002#$\u0007",
    "\u0002\u0002\u0003$\u0003\u0003\u0002\u0002\u0002%*\u0005\u0006\u0004",
    "\u0002&*\u0005\f\u0007\u0002\'*\u0005\u000e\b\u0002(*\u0005\b\u0005",
    "\u0002)%\u0003\u0002\u0002\u0002)&\u0003\u0002\u0002\u0002)\'\u0003",
    "\u0002\u0002\u0002)(\u0003\u0002\u0002\u0002*\u0005\u0003\u0002\u0002",
    "\u0002+,\u0007\u0004\u0002\u0002,-\u0007\n\u0002\u0002-.\u0007\t\u0002",
    "\u0002.\u0007\u0003\u0002\u0002\u0002/0\u0007\u0005\u0002\u000201\u0007",
    "\f\u0002\u000212\u0007\r\u0002\u000223\u0007\u0016\u0002\u000235\u0007",
    "\u000e\u0002\u000246\u0005\n\u0006\u000254\u0003\u0002\u0002\u00025",
    "6\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u000278\u0007\u0010\u0002",
    "\u00028\t\u0003\u0002\u0002\u00029:\u0007\u000f\u0002\u0002:;\u0007",
    "\u0012\u0002\u0002;<\u0007\u0013\u0002\u0002<=\u0007\u0012\u0002\u0002",
    "=>\u0007\u0014\u0002\u0002>\u000b\u0003\u0002\u0002\u0002?@\u0007\u0006",
    "\u0002\u0002@A\u0007\u0018\u0002\u0002AB\u0007\u0019\u0002\u0002BC\u0007",
    "\t\u0002\u0002C\r\u0003\u0002\u0002\u0002DE\u0007\u0007\u0002\u0002",
    "EF\u0007\t\u0002\u0002F\u000f\u0003\u0002\u0002\u0002GH\u0007\b\u0002",
    "\u0002HI\u0007\u001b\u0002\u0002I\u0011\u0003\u0002\u0002\u0002JU\u0005",
    "\u0014\u000b\u0002KU\u0005\u0016\f\u0002LP\u0007!\u0002\u0002MO\u0005",
    "\u0016\f\u0002NM\u0003\u0002\u0002\u0002OR\u0003\u0002\u0002\u0002P",
    "N\u0003\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002QS\u0003\u0002\u0002",
    "\u0002RP\u0003\u0002\u0002\u0002SU\u0007\"\u0002\u0002TJ\u0003\u0002",
    "\u0002\u0002TK\u0003\u0002\u0002\u0002TL\u0003\u0002\u0002\u0002U\u0013",
    "\u0003\u0002\u0002\u0002VW\u0007\u001d\u0002\u0002W\u0015\u0003\u0002",
    "\u0002\u0002XY\u0007\u001e\u0002\u0002Y_\u0007\u0016\u0002\u0002Z[\u0007",
    "\u001f\u0002\u0002[_\u0007\u0016\u0002\u0002\\]\u0007 \u0002\u0002]",
    "_\u0007\u0016\u0002\u0002^X\u0003\u0002\u0002\u0002^Z\u0003\u0002\u0002",
    "\u0002^\\\u0003\u0002\u0002\u0002_\u0017\u0003\u0002\u0002\u0002\t\u001b",
    "!)5PT^"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class vcdParser extends antlr4.Parser {

    static grammarFileName = "vcd.g";
    static literalNames = [ null, null, null, "'$var'", "'$scope'", "'$upscope'", 
                            "'$enddefinitions'", null, null, null, null, 
                            null, null, "'['", null, null, null, "':'", 
                            "']'" ];
    static symbolicNames = [ null, "DMWhitespace", "TextDeclarationStart", 
                             "VarDeclarationStart", "ScopeDeclarationStart", 
                             "UpscopeDeclarationStart", "EndDefinitionsDeclaration", 
                             "DeclarationEnd", "Text", "VDWhitespace", "VType", 
                             "VDecimal", "VIdentifier", "VBusStart", "VDeclarationEnd", 
                             "VBusWhitespace", "VBusDecimal", "VBusColon", 
                             "VBusEnd", "SIDWhitespace", "ShortID", "SWhitespace", 
                             "SType", "SIdentifier", "DEWhitespace", "DEDeclarationEnd", 
                             "CWhitespace", "CTimestamp", "CBit", "CBitVector", 
                             "CReal", "CKeyword", "CDeclarationEnd" ];
    static ruleNames = [ "top", "declaration", "text_declaration", "variable_declaration", 
                         "bus", "scope_declaration", "upscope_declaration", 
                         "end_definitions_declaration", "command", "timestamp", 
                         "command_value_change" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = vcdParser.ruleNames;
        this.literalNames = vcdParser.literalNames;
        this.symbolicNames = vcdParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	top() {
	    let localctx = new TopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, vcdParser.RULE_top);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 22;
	            this.declaration();
	            this.state = 25; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << vcdParser.TextDeclarationStart) | (1 << vcdParser.VarDeclarationStart) | (1 << vcdParser.ScopeDeclarationStart) | (1 << vcdParser.UpscopeDeclarationStart))) !== 0));
	        this.state = 27;
	        this.end_definitions_declaration();
	        this.state = 29; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 28;
	            this.command();
	            this.state = 31; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << vcdParser.CTimestamp) | (1 << vcdParser.CBit) | (1 << vcdParser.CBitVector) | (1 << vcdParser.CReal) | (1 << vcdParser.CKeyword))) !== 0));
	        this.state = 33;
	        this.match(vcdParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, vcdParser.RULE_declaration);
	    try {
	        this.state = 39;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case vcdParser.TextDeclarationStart:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 35;
	            this.text_declaration();
	            break;
	        case vcdParser.ScopeDeclarationStart:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 36;
	            this.scope_declaration();
	            break;
	        case vcdParser.UpscopeDeclarationStart:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 37;
	            this.upscope_declaration();
	            break;
	        case vcdParser.VarDeclarationStart:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 38;
	            this.variable_declaration();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	text_declaration() {
	    let localctx = new Text_declarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, vcdParser.RULE_text_declaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(vcdParser.TextDeclarationStart);
	        this.state = 42;
	        this.match(vcdParser.Text);
	        this.state = 43;
	        this.match(vcdParser.DeclarationEnd);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable_declaration() {
	    let localctx = new Variable_declarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, vcdParser.RULE_variable_declaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(vcdParser.VarDeclarationStart);
	        this.state = 46;
	        this.match(vcdParser.VType);
	        this.state = 47;
	        this.match(vcdParser.VDecimal);
	        this.state = 48;
	        this.match(vcdParser.ShortID);
	        this.state = 49;
	        this.match(vcdParser.VIdentifier);
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===vcdParser.VBusStart) {
	            this.state = 50;
	            this.bus();
	        }

	        this.state = 53;
	        this.match(vcdParser.VDeclarationEnd);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bus() {
	    let localctx = new BusContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, vcdParser.RULE_bus);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(vcdParser.VBusStart);
	        this.state = 56;
	        this.match(vcdParser.VBusDecimal);
	        this.state = 57;
	        this.match(vcdParser.VBusColon);
	        this.state = 58;
	        this.match(vcdParser.VBusDecimal);
	        this.state = 59;
	        this.match(vcdParser.VBusEnd);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	scope_declaration() {
	    let localctx = new Scope_declarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, vcdParser.RULE_scope_declaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(vcdParser.ScopeDeclarationStart);
	        this.state = 62;
	        this.match(vcdParser.SType);
	        this.state = 63;
	        this.match(vcdParser.SIdentifier);
	        this.state = 64;
	        this.match(vcdParser.DeclarationEnd);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	upscope_declaration() {
	    let localctx = new Upscope_declarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, vcdParser.RULE_upscope_declaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(vcdParser.UpscopeDeclarationStart);
	        this.state = 67;
	        this.match(vcdParser.DeclarationEnd);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	end_definitions_declaration() {
	    let localctx = new End_definitions_declarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, vcdParser.RULE_end_definitions_declaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(vcdParser.EndDefinitionsDeclaration);
	        this.state = 70;
	        this.match(vcdParser.DEDeclarationEnd);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	command() {
	    let localctx = new CommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, vcdParser.RULE_command);
	    var _la = 0; // Token type
	    try {
	        this.state = 82;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case vcdParser.CTimestamp:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 72;
	            this.timestamp();
	            break;
	        case vcdParser.CBit:
	        case vcdParser.CBitVector:
	        case vcdParser.CReal:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 73;
	            this.command_value_change();
	            break;
	        case vcdParser.CKeyword:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 74;
	            this.match(vcdParser.CKeyword);
	            this.state = 78;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << vcdParser.CBit) | (1 << vcdParser.CBitVector) | (1 << vcdParser.CReal))) !== 0)) {
	                this.state = 75;
	                this.command_value_change();
	                this.state = 80;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 81;
	            this.match(vcdParser.CDeclarationEnd);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	timestamp() {
	    let localctx = new TimestampContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, vcdParser.RULE_timestamp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(vcdParser.CTimestamp);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	command_value_change() {
	    let localctx = new Command_value_changeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, vcdParser.RULE_command_value_change);
	    try {
	        this.state = 92;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case vcdParser.CBit:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 86;
	            this.match(vcdParser.CBit);
	            this.state = 87;
	            this.match(vcdParser.ShortID);
	            break;
	        case vcdParser.CBitVector:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 88;
	            this.match(vcdParser.CBitVector);
	            this.state = 89;
	            this.match(vcdParser.ShortID);
	            break;
	        case vcdParser.CReal:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 90;
	            this.match(vcdParser.CReal);
	            this.state = 91;
	            this.match(vcdParser.ShortID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

vcdParser.EOF = antlr4.Token.EOF;
vcdParser.DMWhitespace = 1;
vcdParser.TextDeclarationStart = 2;
vcdParser.VarDeclarationStart = 3;
vcdParser.ScopeDeclarationStart = 4;
vcdParser.UpscopeDeclarationStart = 5;
vcdParser.EndDefinitionsDeclaration = 6;
vcdParser.DeclarationEnd = 7;
vcdParser.Text = 8;
vcdParser.VDWhitespace = 9;
vcdParser.VType = 10;
vcdParser.VDecimal = 11;
vcdParser.VIdentifier = 12;
vcdParser.VBusStart = 13;
vcdParser.VDeclarationEnd = 14;
vcdParser.VBusWhitespace = 15;
vcdParser.VBusDecimal = 16;
vcdParser.VBusColon = 17;
vcdParser.VBusEnd = 18;
vcdParser.SIDWhitespace = 19;
vcdParser.ShortID = 20;
vcdParser.SWhitespace = 21;
vcdParser.SType = 22;
vcdParser.SIdentifier = 23;
vcdParser.DEWhitespace = 24;
vcdParser.DEDeclarationEnd = 25;
vcdParser.CWhitespace = 26;
vcdParser.CTimestamp = 27;
vcdParser.CBit = 28;
vcdParser.CBitVector = 29;
vcdParser.CReal = 30;
vcdParser.CKeyword = 31;
vcdParser.CDeclarationEnd = 32;

vcdParser.RULE_top = 0;
vcdParser.RULE_declaration = 1;
vcdParser.RULE_text_declaration = 2;
vcdParser.RULE_variable_declaration = 3;
vcdParser.RULE_bus = 4;
vcdParser.RULE_scope_declaration = 5;
vcdParser.RULE_upscope_declaration = 6;
vcdParser.RULE_end_definitions_declaration = 7;
vcdParser.RULE_command = 8;
vcdParser.RULE_timestamp = 9;
vcdParser.RULE_command_value_change = 10;

class TopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vcdParser.RULE_top;
    }

	end_definitions_declaration() {
	    return this.getTypedRuleContext(End_definitions_declarationContext,0);
	};

	EOF() {
	    return this.getToken(vcdParser.EOF, 0);
	};

	declaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationContext,i);
	    }
	};

	command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommandContext);
	    } else {
	        return this.getTypedRuleContext(CommandContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof vcdListener ) {
	        listener.enterTop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vcdListener ) {
	        listener.exitTop(this);
		}
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vcdParser.RULE_declaration;
    }

	text_declaration() {
	    return this.getTypedRuleContext(Text_declarationContext,0);
	};

	scope_declaration() {
	    return this.getTypedRuleContext(Scope_declarationContext,0);
	};

	upscope_declaration() {
	    return this.getTypedRuleContext(Upscope_declarationContext,0);
	};

	variable_declaration() {
	    return this.getTypedRuleContext(Variable_declarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vcdListener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vcdListener ) {
	        listener.exitDeclaration(this);
		}
	}


}



class Text_declarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vcdParser.RULE_text_declaration;
    }

	TextDeclarationStart() {
	    return this.getToken(vcdParser.TextDeclarationStart, 0);
	};

	Text() {
	    return this.getToken(vcdParser.Text, 0);
	};

	DeclarationEnd() {
	    return this.getToken(vcdParser.DeclarationEnd, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vcdListener ) {
	        listener.enterText_declaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vcdListener ) {
	        listener.exitText_declaration(this);
		}
	}


}



class Variable_declarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vcdParser.RULE_variable_declaration;
    }

	VarDeclarationStart() {
	    return this.getToken(vcdParser.VarDeclarationStart, 0);
	};

	VType() {
	    return this.getToken(vcdParser.VType, 0);
	};

	VDecimal() {
	    return this.getToken(vcdParser.VDecimal, 0);
	};

	ShortID() {
	    return this.getToken(vcdParser.ShortID, 0);
	};

	VIdentifier() {
	    return this.getToken(vcdParser.VIdentifier, 0);
	};

	VDeclarationEnd() {
	    return this.getToken(vcdParser.VDeclarationEnd, 0);
	};

	bus() {
	    return this.getTypedRuleContext(BusContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vcdListener ) {
	        listener.enterVariable_declaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vcdListener ) {
	        listener.exitVariable_declaration(this);
		}
	}


}



class BusContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vcdParser.RULE_bus;
    }

	VBusStart() {
	    return this.getToken(vcdParser.VBusStart, 0);
	};

	VBusDecimal = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(vcdParser.VBusDecimal);
	    } else {
	        return this.getToken(vcdParser.VBusDecimal, i);
	    }
	};


	VBusColon() {
	    return this.getToken(vcdParser.VBusColon, 0);
	};

	VBusEnd() {
	    return this.getToken(vcdParser.VBusEnd, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vcdListener ) {
	        listener.enterBus(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vcdListener ) {
	        listener.exitBus(this);
		}
	}


}



class Scope_declarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vcdParser.RULE_scope_declaration;
    }

	ScopeDeclarationStart() {
	    return this.getToken(vcdParser.ScopeDeclarationStart, 0);
	};

	SType() {
	    return this.getToken(vcdParser.SType, 0);
	};

	SIdentifier() {
	    return this.getToken(vcdParser.SIdentifier, 0);
	};

	DeclarationEnd() {
	    return this.getToken(vcdParser.DeclarationEnd, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vcdListener ) {
	        listener.enterScope_declaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vcdListener ) {
	        listener.exitScope_declaration(this);
		}
	}


}



class Upscope_declarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vcdParser.RULE_upscope_declaration;
    }

	UpscopeDeclarationStart() {
	    return this.getToken(vcdParser.UpscopeDeclarationStart, 0);
	};

	DeclarationEnd() {
	    return this.getToken(vcdParser.DeclarationEnd, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vcdListener ) {
	        listener.enterUpscope_declaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vcdListener ) {
	        listener.exitUpscope_declaration(this);
		}
	}


}



class End_definitions_declarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vcdParser.RULE_end_definitions_declaration;
    }

	EndDefinitionsDeclaration() {
	    return this.getToken(vcdParser.EndDefinitionsDeclaration, 0);
	};

	DEDeclarationEnd() {
	    return this.getToken(vcdParser.DEDeclarationEnd, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vcdListener ) {
	        listener.enterEnd_definitions_declaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vcdListener ) {
	        listener.exitEnd_definitions_declaration(this);
		}
	}


}



class CommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vcdParser.RULE_command;
    }

	timestamp() {
	    return this.getTypedRuleContext(TimestampContext,0);
	};

	command_value_change = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Command_value_changeContext);
	    } else {
	        return this.getTypedRuleContext(Command_value_changeContext,i);
	    }
	};

	CKeyword() {
	    return this.getToken(vcdParser.CKeyword, 0);
	};

	CDeclarationEnd() {
	    return this.getToken(vcdParser.CDeclarationEnd, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vcdListener ) {
	        listener.enterCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vcdListener ) {
	        listener.exitCommand(this);
		}
	}


}



class TimestampContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vcdParser.RULE_timestamp;
    }

	CTimestamp() {
	    return this.getToken(vcdParser.CTimestamp, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vcdListener ) {
	        listener.enterTimestamp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vcdListener ) {
	        listener.exitTimestamp(this);
		}
	}


}



class Command_value_changeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vcdParser.RULE_command_value_change;
    }

	CBit() {
	    return this.getToken(vcdParser.CBit, 0);
	};

	ShortID() {
	    return this.getToken(vcdParser.ShortID, 0);
	};

	CBitVector() {
	    return this.getToken(vcdParser.CBitVector, 0);
	};

	CReal() {
	    return this.getToken(vcdParser.CReal, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vcdListener ) {
	        listener.enterCommand_value_change(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vcdListener ) {
	        listener.exitCommand_value_change(this);
		}
	}


}




vcdParser.TopContext = TopContext; 
vcdParser.DeclarationContext = DeclarationContext; 
vcdParser.Text_declarationContext = Text_declarationContext; 
vcdParser.Variable_declarationContext = Variable_declarationContext; 
vcdParser.BusContext = BusContext; 
vcdParser.Scope_declarationContext = Scope_declarationContext; 
vcdParser.Upscope_declarationContext = Upscope_declarationContext; 
vcdParser.End_definitions_declarationContext = End_definitions_declarationContext; 
vcdParser.CommandContext = CommandContext; 
vcdParser.TimestampContext = TimestampContext; 
vcdParser.Command_value_changeContext = Command_value_changeContext; 
