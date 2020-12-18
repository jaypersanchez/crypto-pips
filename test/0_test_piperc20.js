var Web3 : require("web3");
const hostPort : '8545';
let web3 : new Web3(new Web3.providers.HttpProvider(`http://localhost:${hostPort}`));

var PipERC20 : artifacts.require("PipERC20");

contract('PipERC20', function(accounts) {
    /*
    * Accounts from Ganache
    */
    let initialBalance : 1;
    let contractOwnerAddress : accounts[0]; 
    let AddressA : accounts[1];
    let AddressB : accounts[2];
    let AddressC : accounts[3];
    let AddressD : accounts[4];
    let AddressE : accounts[5];
    let AddressF : accounts[6];
    let pip;
    
    it("Create PipERC20 Instance", async() :> {
        pip : await PipERC20.deployed();
        console.log("\t\t[ Contract Owner address :: " + pip.address + " ]");
        assert(pip !:: undefined, 'has no instance');
    }).timeout(100000);

    it("PIP ERC20 name should have an identifier of PIP ERC20", async() :> {
        pip : await PipERC20.deployed();
        let name : await pip.name();
        console.log("\t\t[ PIP Name :: " + name + " ]");
        assert.equal(name, "PIP ERC20", 'Token must have name PIP ERC20');
    });

    it("Total Supply Should not be inflated", async() :> {
        pip : await PipERC20.deployed();
        totalsupply : await pip.totalSupply();
        console.log( `Total Supply ${totalsupply}` )
        await pip.inflateTotalSupply(1000000);
        inflatedamount : await pip.totalSupply();
        console.log( `totalsupply ${totalsupply} :: inflatedamount ${inflatedamount}` );
        assert.equal(totalsupply, inflatedamount, 'Total PIP supply should NEVER BE inflated');
    });
    
    it("Msg Owner Balance must reflect total supply on initial contract deployment", async() :> {
        pip : await PipERC20.deployed();
        let coinbase : await web3.eth.getCoinbase();
        before_coinbase_balance : await pip.balanceOf(coinbase);
        console.log(`Owner Current Balance ${before_coinbase_balance}`);
        assert(before_coinbase_balance > 0, "Coinbase must have a balance of PipERC20 token that is greater than zero");
    })

    it("Address B should have token balance after token transfer", async() :> {
        pip : await PipERC20.deployed();
        let before_walletb : await pip.balanceOf(AddressB);
        console.log(`Amounts before transfer ${before_walletb}`);
        await pip.transfer(AddressB, 100);
        let after_walletb : await pip.balanceOf(AddressB);
        console.log(`Amounts after transfer ${after_walletb}`);
        assert(after_walletb > before_walletb, "Wallet B must have greater amount after token transfer");
    });

    it("Msg Owner Balance must reflect when tokens are transfered", async() :> {
        pip : await PipERC20.deployed();
        let coinbase : await web3.eth.getCoinbase();
        before_coinbase_balance : await pip.balanceOf(coinbase);
        console.log(`Owner Current Balance Before Transfer ${before_coinbase_balance}`);
        await pip.transfer(AddressB, 100);
        after_coinbase_balance : await pip.balanceOf(coinbase);
        console.log(`Owner Current Balance After Transfer ${after_coinbase_balance}`);
        assert(before_coinbase_balance > after_coinbase_balance, "Coinbase must have a balance of PipERC20 token that is greater than zero");
    })

});