pragma solidity ^0.6.0 <0.6.11;

import "./interface/IERC721.sol";

/*
* This smart contract represents a class of property assets both for private and commercial properties.
* This is the reason for using ERC721 standard
*/
contract Properties is IERC721 {

    address owner;
    address contractMsgSender;
    //tokenId is considered the propertyId
    uint256 tokenId;
    uint256 initialPropertyValue;

    //represents the value of the property
    mapping(address => uint256) propertyValue;
	mapping(address => mapping (address => uint256)) allowed;
    //uint256 represents the ID of the token for the property.  This can be in a form of property title identification
    mapping(uint256 => address) propertyOwner;

    event propertyValueSet(address property_Owner, uint256 value);

    constructor ( address propertyOwnerAddress, uint256 _initialPropertyValue, uint256 _tokenId ) public {
        /*
        * anyone can deploy this contract either the property owner itself or
        * another vendor on behalf the property owner.  So the owner of the property MUST BE identified as
        * the owner if the msg.sender happens to be a vendor deploying on behalf of the property owner
        */
        contractMsgSender = msg.sender;
		owner = propertyOwnerAddress;
        initialPropertyValue = _initialPropertyValue;
        tokenId = _tokenId;
        propertyOwner[tokenId] = owner;
        propertyValue[propertyOwnerAddress] = initialPropertyValue;
	}

    function isApprovedForAll(address _owner, address _operator) external override view returns (bool) {
        return(false);
    }

    function getApproved(uint256 _tokenId) external override view returns (address) {

    }

    function setApprovalForAll(address _operator, bool _approved) external override {

    }
 
    function approve(address _approved, uint256 _tokenId) external override payable {

    }

    function transferFrom(address _from, address _to, uint256 _tokenId) external override payable {

    }

    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes calldata data) external override payable {

    }

    function safeTransferFrom(address _from, address _to, uint256 _tokenId) external override payable {

    }

    function ownerOf(uint256 _propertyId) external override view returns (address) {
        address addy = propertyOwner[_propertyId];
        return  (addy);
    }

    function balanceOf(address propertyOwner) public override view returns (uint256) {
        uint256 propertyValue = propertyValue[propertyOwner];
		return propertyValue; 
	}

}