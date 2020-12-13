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
    
    it("Assign AddressA as a property owner", async() => {
        let done = false;
        let propertyId = 34432222;
        if(!done) {
            let property = await Properties.deployed();
            await property.addPropertyOwner(AddressA, propertyId,{from:contractOwnerAddress})
            property.getPastEvents("propertyOwnerAdded", function(err, result) {
                if(err) {
                    console.log(err);
                }
                else {
                    let stringResult = JSON.stringify(result);
                    //let parsedResult = JSON.parse(result)
                    console.log(`${result[0].returnValues.propertyId}`)
                }
            })
            done = true;
        }
        
    }).timeout(500000);

    it("Property should have an Owner", async() => {
        let done = false;
        let propertyId = 34432222
        if(!done) {
            let property = await Properties.deployed();
            let result = await property.ownerOf(propertyId);
            console.log(`Property Has Owner ${result.toString()}`);
            
            done = true;
        }
        //assert(before_coinbase_balance > 0, "Coinbase must have a balance of PipERC20 token that is greater than zero");
    }).timeout(500000);

    it("Set Value of property", async() => {
        let propertyId = 34432222;
        let value = 20000000
        let property = await Properties.deployed();
        await property.setPropertyValue(AddressA, value,{from:AddressB})
        property.getPastEvents("propertyValueSet", function(error, result) {
            if(err) {
                console.log(err);
            }
            else {
                let stringResult = JSON.stringify(result);
                //let parsedResult = JSON.parse(result)
                console.log(`${stringResult}`)
            }
        })
    }).timeout(500000);

});