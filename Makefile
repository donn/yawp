BUILD_DIR=build

ANTLR_OPTS=-Dlanguage=JavaScript


$(BUILD_DIR)/vcdParser.js: vcd.g vcdlexer.g
	mkdir -p $(@D)
	antlr -o $(BUILD_DIR) $(ANTLR_OPTS) $^