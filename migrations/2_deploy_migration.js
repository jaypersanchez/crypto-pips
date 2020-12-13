var PipERC20 = artifacts.require("./PipERC20.sol");
var Properties = artifacts.require("./Properties.sol");
var IERC721 = artifacts.require("./interface/IERC721.sol");

module.exports = function(deployer) {
  deployer.deploy(PipERC20, 1000000); // 1M total supply 
  deployer.deploy(Properties, '0x47e89A0d9165f15cb600A52b1FC2502E1947D236', 2500000, 34432222); // 1M total supply
  //deployer.deploy(IERC721); // 1M total supply 
};
