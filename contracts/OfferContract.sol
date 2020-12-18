pragma solidity ^0.6.0 <0.6.11;

import "./ComfreePropertyDataModel.sol";

/*
* First contract to be created.  This will have an expiry date of the offer.
*/

contract OfferContract is ComfreePropertyDataModel {

	address owner;

    struct conditionsList {
        uint Id;
        bool WallsPainted;
        bool CarpetCleaned;
        bool WindowsWashed;
    }

    struct offerContract {
        uint id; 
        address buyerAddress;
        address sellerAddress;
        uint offerDate;
        uint expiredDate;
        uint offerAmount;
        bool accepted;
    }

    mapping(uint => offerContract) offerContractDetails;
    mapping(uint => conditionsList) conditionsListDetails;
    uint numberDaysExpiration = 15;
    uint expired;
    
	constructor (uint _id, address _sellerAddress, address _buyerAddress, uint256 _offerAmount, uint _gracePeriod) public {
        /*
        * Because this is supposed to be completely autonomous, the owner of this contract 
        * must be the seller
        */
        require(_gracePeriod <= 90, "Grace Period for Conditions to be met must be less or equals to 90 days only");
        _gracePeriod += now;
         expired += _gracePeriod;
        owner = _sellerAddress;
        //offerContractDetails.id = uint8(uint256(keccak256(block.timestamp, block.difficulty))%251);
        offerContractDetails[_id] = offerContract(
            _id,
            _sellerAddress,
            _buyerAddress,
            now,
            expired,
            _offerAmount,
            false
        );
    }

    /*
    * _address parameter can be either the seller or the buyer
    */
    function getOfferContractDetails(uint _ident) external view 
        returns(uint _id,
                address _buyerAddress, 
                address _sellerAddress, 
                uint _offerDate, 
                uint _currentDate, 
                uint _expiredDate,
                uint _offerAmount,
                bool _accepted) {
        offerContract storage offer = offerContractDetails[_ident];
        uint __id = offer.id;
        address __sellerAddress = offer.sellerAddress; 
        address __buyerAddress = offer.buyerAddress;
        uint __offerDate = offer.offerDate;
        uint __expiredDate = offer.expiredDate;
        uint __offerAmount = offer.offerAmount;
        bool __accepted = offer.accepted;
        return (__id, 
                __buyerAddress,
                __sellerAddress, 
                __offerDate, 
                __expiredDate, 
                __expiredDate,
                __offerAmount, 
                __accepted
        );
    }

    function accept(uint _id, bool _value) public returns(bool) {
        /*
        * Future update.  Must have mechanism to prevent changing accepted offer
        * back to non-acception.  Depending on law of the land, the current
        * instance of this contract may have to be nulled and a new contract
        * must be opened.
        */
        offerContractDetails[_id].accepted = _value;
        //must check if true emit, if false emit then kill contract 
        emit OfferAccepted(_id, _value);
        return _value; //this will either return true or false
    }

    function isOfferAccepted(uint _id) public view returns(bool) {
        return offerContractDetails[_id].accepted;
    }

    function isOfferExpired(uint _id) public returns(bool _value) {
        /*if( now == offerContractObjects.expiredDate || now > offerContractObjects.expiredDate ) {
            _value = true;
        }
        else {
            _value = false;
        }
        return _value;*/
    }

    /****** Condition functions *****/
    function setConditionGracePeriod(uint _gracePeriod) external {

    }

    function isConditionMet(uint _ident) public view returns(bool _value) {
        conditionsList storage conditions = conditionsListDetails[_ident];
        uint id = conditions.Id;
        bool WallsPainted = conditions.WallsPainted;
        bool CarpetCleaned = conditions.CarpetCleaned;
        bool WindowsWashed = conditions.WindowsWashed;
        if(WallsPainted == true && CarpetCleaned == true && WindowsWashed == true) {
            return true;
        }
        else {
            return false;
        }           
    }

    function setConditionList(uint _ident, bool _WallsPainted, bool _CarpetCleaned,bool _WindowsWashed) external {
        conditionsListDetails[_ident] = conditionsList(
                                                _ident,
                                                _WallsPainted,
                                                _CarpetCleaned,
                                                _WindowsWashed
                                              );
        if( _WallsPainted && _CarpetCleaned && _WindowsWashed ) {
            //all sales conditions met
            emit isAllSaleConditionsMet(true, true, true);
        }
    }

    function getConditions(uint _ident) external view returns(bool _WallsPainted, bool _CarpetCleaned,bool _WindowsWashed) {
        conditionsList storage conditions = conditionsListDetails[_ident];
        uint ident = conditions.Id;
        bool WallsPainted = conditions.WallsPainted;
        bool CarpetCleaned = conditions.CarpetCleaned;
        bool WindowsWashed = conditions.WindowsWashed;
        //must return the struct as array for UI
        return (WallsPainted,
                CarpetCleaned,
                WindowsWashed
               );
    }

}
