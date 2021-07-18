# Benchmarking
Just a quick performance comparison.

Current numbers generated on a 2017 15" MacBook Pro (Quad-core, 16 GB RAM).

# Running
You'll need to source your own VCD test files and Verilog VCD Parser binary: Here's how I run mine:

```sh
TEST_DIRECTORY=~/vcd_hammer\
    VVCDP_PATH=~/Code/verilog-vcd-parser/build/vcd-parse\
    yarn benchmark
```