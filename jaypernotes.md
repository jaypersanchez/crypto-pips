# Notes for learning path and misc notes

## Learning Path

1. Must take ABI and ByteCode from contract JSON file in order to deploy a contract and which requires to these two inputs but must be done programmatically instead of copy paste.  Deploymnet of contract from a DApp is one way to interface with a contract based on use case

2. Another use case is to create an instance of a contract that's already deployed on the network but will require the contract address so the syntax is different for this use case

3. Write a deployment tool for Rinkeby which will be the same steps for Mainnet deployment

* Create ether address
* Create private and public key

4. Use Truffle Suite to manage and test the entire project

## Things to figure out

1. Git commit recursively to include sub folders.  Right now it's not including the React Native project only saving the Solidity project

2. Once compile and migrate is done through Truffle, should automate the steps to move the new update built contract artifacts into a desired target.  In this case react-native\client\wallet