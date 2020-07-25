var PipERC20 = artifacts.require("./PipERC20.sol");

module.exports = function(deployer) {
  deployer.deploy(PipERC20, 1000000); // 1M total supply 
};
