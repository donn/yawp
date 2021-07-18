# Yet Another Waveform Parser
BUCKle up because this VCD Parser has ANTLRs.

I am not sorry. I almost called this project VCDeer.

# Why?
[vcd-parser](https://github.com/ahmed-agiza/vcd-parser) is too slow.

[verilog-vcd-parser](https://github.com/ben-marshall/verilog-vcd-parser) doesn't parse everything I've thrown at it.

# Requirements
- Node.js 14+
- Antlr 4.9.2+

# Developing
Use `make` to update `antlr_build/` - don't update it manually.

You can test the output with a vcd file by passing it through `bin/yawp.js`.

Please note that `parse` doesn't currently throw exceptions for failures to parse, contrarily, it tries to best-effort parse the document.

# ⚖️ License
Apache License v2.0. Check 'License'.