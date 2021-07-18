# Benchmark
This compares YAWP with the two other free VCD parsers I found and didn't find suitable.

Test|Size (Bytes)|[YAWP](#)|[Verilog VCD Parser](https://github.com/ben-marshall/verilog-vcd-parser/tree/d9be54497618168d7bab49648344df98f42a7f52)|[VCDParser](https://github.com/ahmed-agiza/vcd-parser/tree/acdf3dd38bfcd9451b55f95af22591e20c173d30)
-|-|-|-|-
Tiny.vcd|3534|0.041s|0.015s|0.65s
FaultScanChain.vcd|620125|0.614s|❌|137.846s
SRAM.vcd|6124839|2.571s|❌|186.284s
EL2_SoC.vcd|27424634|8.629s|14.713s|⚠️


❌: That parser has failed to parse this file.

⚠️: That parser has exceeded 300 seconds when parsing this test.

