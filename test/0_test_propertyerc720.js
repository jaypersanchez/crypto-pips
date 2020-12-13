var Web3 = require("web3");
const hostPort = '7545';
let web3 = new Web3(new Web3.providers.HttpProvider(`ws://localhost:${hostPort}`));

var Properties = artifacts.require("Properties");

contract('Properties', function(accounts) {
    /*
    * Accounts from Ganache
    */
    let initialBalance = 1;
    let contractOwnerAddress = accounts[0]; //also coinbase
    let AddressA = accounts[1];
    let AddressB = accounts[2];
    let AddressC = accounts[3];
    let AddressD = accounts[4];
    let AddressE = accounts[5];
    let AddressF = accounts[6];
    
    it("Create Properties Instance", async() => {
        property = await Properties.deployed();
        console.log("\t\t[ Contract Owner address :: " + Properties.address + " ]");
        assert(Properties !== undefined, 'has no instance');
    }).timeout(100000);

    /*it("PIP ERC20 name should have an identifier of PIP ERC20", async() => {
        pip = await PipERC20.deployed();
        let name = await pip.name();
        console.log("\t\t[ PIP Name :: " + name + " ]");
        assert.equal(name, "PIP ERC20", 'Token must have name PIP ERC20');
    });*/
});