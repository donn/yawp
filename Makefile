BUILD_DIR=antlr_build

ANTLR_BIN ?= antlr
ANTLR_OPTS = -Dlanguage=JavaScript

$(BUILD_DIR)/vcdParser.js: vcd.g vcdLexer.g
	mkdir -p $(@D)
	$(ANTLR_BIN) -o $(BUILD_DIR) $(ANTLR_OPTS) $^

.PHONY: clean
clean:
	rm -rf ./build