var PipERC20 = artifacts.require("./PipERC20.sol");
var PipERC721 = artifacts.require("./PipERC721.sol");
var IERC721 = artifacts.require("./interface/IERC721.sol");

module.exports = function(deployer) {
  deployer.deploy(PipERC20, 1000000); // 1M total supply 
  //deployer.deploy(PipERC721, 1000000); // 1M total supply
  //deployer.deploy(IERC721); // 1M total supply 
};
