var DataModel = artifacts.require("./ComfreePropertyDataModel.sol");
var OfferContract = artifacts.require("./OfferContract.sol")
var offerDetails =  {
    "SELLER_ADDRESS" : "0xcc5A2da45Bfd4D3e66c135De3932Ca097D9f7C63",
    "SELLER_PRIVATE_KEY" : "6f2e1520d35b7e46a40a708597f097d5e768d17427af1a89749f44bb25b2a150",
    "BUYER_ADDRESS" : "0xa6Ec84a61E8A85Da152325eDc7746575C41d632b",
    "BUYER_PRIVATE_KEY" : "7499374ff544bb3f888ad35354ae9858a991ec107582ad6e08ca6911b9c9a890",
    "ID" : "2600500",
    "GRACE_PERIOD" : 30,
    "OFFER_AMOUNT" : 345000
}

module.exports = function(deployer) {
  deployer.deploy(DataModel); // 1M total supply 
  deployer.deploy(
      OfferContract, 
      offerDetails.ID,
      offerDetails.SELLER_ADDRESS,
      offerDetails.BUYER_ADDRESS,
      offerDetails.OFFER_AMOUNT,
      offerDetails.GRACE_PERIOD
  ); 
};