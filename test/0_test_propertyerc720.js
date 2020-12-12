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

    it("Assign AddressA as a property owner", async() => {
        let propertyId = 34432222
        let property = await Properties.deployed();
        await property.addPropertyOwner(AddressA, propertyId)
        //property.getPastEvents("propertyOwnerAdded", function(err, result) {
            property.once(function(err, result) {
            if(err) {
                console.log(err);
            }
            else {
                //console.log( `Property Address ${result.args._ownerAddress} for Property ID ${result.args._propertyId}` )
                console.log(result)
            }
        })
        
    })

    it("Property should have an Owner", async() => {
        let done = false;
        let propertyId = 34432222
        
        if(!done) {
            let property = await Properties.deployed();
            await property.ownerOf(propertyId)
            .then(function(error, result) {
                if(!error) {
                    console.log(result)
                }
                else {
                    console.log(error)
                }
                
            })
            done = true;
        }
        //assert(before_coinbase_balance > 0, "Coinbase must have a balance of PipERC20 token that is greater than zero");
    })

});