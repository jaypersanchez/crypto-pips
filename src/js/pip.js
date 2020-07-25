import { ethers } from "ethers";
var Web3 = require('web3');
var fs = require('fs');
var path = require('path');
var solc = require('solc');
var FileReader = require('filereader');
const RpcURL = "https://localhost:8545";
let provider = new ethers.providers.JsonRpcProvider(RpcURL);

//Replace private key from coinbase ganache instance
const privateKey = "DB206DB4DD74CC1757CEDEBFAA7AE019DAB874A746465D838ED3264E2DF8C0C5";
let wallet = new ethers.Wallet(privateKey, provider);
var contractDeployedAddress;
var contractDeployedHash;
var web3 = new Web3( new Web3.providers.HttpProvider(RpcURL) );
import { BYTE_CODE } from "./artifacts/ByteCode";
import { ABI } from "./artifacts/ABI";

const pip = () => {
    
    let factory = new ethers.ContractFactory(ABI, BYTE_CODE.object, wallet);
    factory.deploy()
        .then(contract =>
        {

            //get file content ABI and BYTE_CODE
            var reader = new FileReader();
            var abi = ABI;
            var bin = BYTE_CODE.object;
            console.log(contract.address);
            console.log(contract.deployTransaction.hash);
        });
}

export default pip;
