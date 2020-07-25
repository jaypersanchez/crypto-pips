pragma solidity ^0.6.0 <0.6.11;

import "./interface/IERC721.sol";

contract PipERC721 is IERC721 {

    address owner;
    uint256 totalSupply;
    uint256 tokenId;
    mapping(address => uint256) balances;
	mapping(address => mapping (address => uint256)) allowed;
    mapping(uint256 => address) tokenOwner;

    constructor ( uint256 total ) public {
		totalSupply = total;
		balances[msg.sender] = totalSupply;
        owner = msg.sender;
	}

    /*
    *   @TODO still need to implement
    *  must create a mapping of token ownership per id
    */
    function ownerOf(uint256 _tokenId) external view returns (address) {
        return address(this); 
    }

    function balanceOf(address tokenOwner) public view returns (uint256) {
		return balances[tokenOwner]; 
	}

}