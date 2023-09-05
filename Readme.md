# Yet Another Waveform Parser
BUCKle up because this VCD Parser has ANTLRs.

I am not sorry. I almost called this project VCDeer.

# Why?
Test|Size (Bytes)|[YAWP](#)|[Verilog VCD Parser](https://github.com/ben-marshall/verilog-vcd-parser/tree/d9be54497618168d7bab49648344df98f42a7f52)|[VCDParser](https://github.com/ahmed-agiza/vcd-parser/tree/acdf3dd38bfcd9451b55f95af22591e20c173d30)
-|-|-|-|-
Tiny.vcd|3534|0.041s|0.015s|0.65s
FaultScanChain.vcd|620125|0.614s|❌|137.846s
SRAM.vcd|6124839|2.571s|❌|186.284s
EL2_SoC.vcd|27424634|8.629s|14.713s|⚠️


❌: That parser has failed to parse this file.

⚠️: That parser has exceeded 300 seconds when parsing this test.

# Requirements
- Node.js 14+
- Antlr 4.9.2+

# Developing
Use `make` to update `antlr_build/` - don't update it manually.

You can test the output with a vcd file by passing it through `bin/yawp.js`.

Please note that `parse` doesn't currently throw exceptions for failures to parse, contrarily, it tries to best-effort parse the document.

# ⚖️ License
Apache License v2.0. Check 'License'.
