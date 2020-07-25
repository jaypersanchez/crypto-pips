pragma solidity ^0.6.0 <0.6.11;

import "./interface/IERC721.sol";

/*
* This smart contract represents a class of property assets both for private and commercial properties.
* This is the reason for using ERC721 standard
*/
contract Properties is IERC721 {

    address owner;
    uint256 tokenId;
    //represents the value of the property
    mapping(address => uint256) propertyValue;
	mapping(address => mapping (address => uint256)) allowed;
    //uint256 represents the ID of the token for the property.  This can be in a form of property title identification
    mapping(uint256 => address) propertyOwner;

    constructor ( uint256 total ) public {
		owner = msg.sender;
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

    /*
    *   @TODO still need to implement
    *  must create a mapping of token ownership per id
    */
    function ownerOf(uint256 _propertyId) external override view returns (address) {
        return propertyOwner[_propertyId]; 
    }

    //contains the value of all properties owned by a specific address
    function balanceOf(address propertyOwner) public override view returns (uint256) {
		return propertyValue[propertyOwner]; 
	}

}