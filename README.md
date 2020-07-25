# Overview

This repo contains several smart contract implementation for the Ethereum network.  These smart contracts can be used for stable coin, security token, and utility tokens all for the purpose of showing how a Smart Contract is implemented and show casing knowledge. The implementation of each ERC standard are basic implementation and not used for any specific use case.  The idea is to take one of these ERC standard and can be used in a specific smart contract project by way of inheritance.  

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
## Generate ABI and Byte

```
solc -o ./src/abi --bin --abi ./PipERC20.sol  ./contracts/interfaces/
```

### Types of ERC Standards

| ERC Standard | Description |
| :----------- | :---------- |
| `ERC-20`     |  This is the standard API used for fungible tokens, including transfer and balance tracking functionalities. |
| `ERC-223`     | This standard protects users from accidental contract transfers. |
| `ERC-721`    | This is the most popular non-fungible token (NFT) standard. While fungible tokens can be divided, non-fungible tokens can not. NFTs can be owned and transacted by individuals as well as consigned to third-parties. NFTs can represent ownership over digital or physical assets. |
| `ERC-809`    | This standard is used to rent rival non-fungible tokens. An NFT is described as ‘rival’ if its use/ownership by one individual prevents simultaneous use/ownership by other individuals. ERC-809 allows an owner to rent access to their rival NFTs using a standard set of commands, and users can view all past and current rental agreements from a single wallet interface. |
| `ERC-1238`   | This standard covers non-transferable tokens (or ‘badges’). |