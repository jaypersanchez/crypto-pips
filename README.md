# Overview

This repo contains several smart contract implementation for the Ethereum network.  These smart contracts can be used for stable coin, security token, and utility tokens all for the purpose of showing how a Smart Contract is implemented and show casing knowledge. 

## Development Environment Setup and Technical Notes

The Smart Contract development environment is setup with the following:

1. Truffle v5.1.13 (core: 5.1.13)
2. Solidity v0.5.16 (solc-js) - truffle.js sets the Solidity Compiler pragma to `0.6.0`
3. Node v10.20.1
4. Web3.js v1.2.1

__NOTE__ Use Ganache-cli.  Attempted to use Ganache V2 but getting error below with `truffle migrate` command

```
Returned error: VM Exception while processing transaction: invalid opcode    at PromiEvent (/usr/local/lib/node_modules/truffle/build/webpack:/packages/contract/lib/promievent.js:9:1)
```