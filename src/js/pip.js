var ethers = require("ethers");
var Web3 = require('web3');
var fs = require('fs');
var path = require('path');
var solc = require('solc');
var FileReader = require('filereader');
const RpcURL = "http://localhost:8545";
let provider = new ethers.providers.JsonRpcProvider(RpcURL);

//Replace private key from coinbase ganache instance
const privateKey = "0x6815a4455b0256abc406cee072bb4a76451a1964406c08350e34b2d8e7026b4d";

let wallet = new ethers.Wallet(privateKey, provider);
var web3 = new Web3( new Web3.providers.HttpProvider(RpcURL) );

if (typeof web3 !== 'undefined') {
 web3 = new Web3(web3.currentProvider);
} 
else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    windows.ethers.enable();
}

let contractAddress = "0xF420B9cAcFDf4456cd5b4565ee783571b699b3F1"

web3.eth.defaultAccount = web3.eth.accounts[0];
let coinbase = "0xdfD2525c77b88cE8e79Ec8133aD3AB3bE61Df553"

var ABI = 
    [
        {"inputs":[{"internalType":"uint256","name":"total","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountInflated","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTokenSupply","type":"uint256"}],"name":"InflateToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"delegate","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"delegate","type":"address"},{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"inflateTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}], "stateMutability":"nonpayable","type":"function"}
    ]

    

    let contract = new ethers.Contract(contractAddress, ABI, wallet);

    contract.balanceOf(coinbase)
        .then(result =>
        {
            console.log(result.toNumber());
        })
        .catch(error =>
        {
            console.log(error);
        });

    contract.name()
        .then(result =>
        {
            console.log(result);
        })
        .catch(error =>
        {
            console.log(error);
        });

        contract.symbol()
        .then(result =>
        {
            console.log(result);
        })
        .catch(error =>
        {
            console.log(error);
        });

