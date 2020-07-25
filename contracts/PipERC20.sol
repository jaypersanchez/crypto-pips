pragma solidity ^0.6.0 < 0.6.11;


/*
* PipERC20 is an ERC20 standard.  Users must handle any false returns by a function call and must not assume that the function will not return a bool
* This token is fungible or transferable.
*/

contract PipERC20 {

	//ERC20 Required variables
	string constant token_name = "PIP ERC20";
	string constant token_symbol = "PIP20";
	uint8 constant token_decimal = 8;
	
	mapping(address => uint256) balances;
	mapping(address => mapping (address => uint256)) allowed;
	uint256 totalSupply_;
	address private owner;
	

	/*
	* Standard event declaration required by ERC20 framework
	*/
	event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
	event Transfer(address indexed from, address indexed to, uint tokens);
	event InflateToken(address owner, uint256 amountInflated, uint256 newTokenSupply);

	/*
	* constructor is run once when it is deployed for the first time
	* unlike the standard constructor practice in an OOP
	* Only the deploying account can enter a contract’s constructor. When the contract is * started up, this function allocates available tokens to the ‘contract owner’ account.
	*/
	constructor ( uint256 total ) public {
		totalSupply_ = total;
		balances[msg.sender] = totalSupply_;
		owner = msg.sender;
	}

	/*
	* ERC20 Standard function but can be optional
	*/
	function name() public view returns (string memory) {
			return(token_name);
	}

	/*
	* ERC20 Standard function but optional
	*/
	function symbol() public view returns (string memory) {
		return(token_symbol);
	}

	/*
	* ERC 20 Standard but optional
	*/
	function decimals() public view returns (uint8) {
		return(token_decimal);
	}

	/*
	* ERC20 required function declaration
	*/
	function totalSupply() public view returns (uint256) {
		return totalSupply_;
	}

	/*
	* This function is to test if totalSupply intialized from constructor can actually be overriden
	* tested through Truffle console and amount unable to override - needed to prove that for myself
	*/
	function inflateTotalSupply(uint256 _amount) public returns (uint256) {
		require(msg.sender == owner);
		totalSupply_ = _amount;
		/*
		* Implement a function in here to determine inflation rate of token when increased
		* supply is manually called.
		*/
		balances[msg.sender] = balances[msg.sender]+_amount;
		//owner address, amount to inflate token, new owner supply balance
		emit InflateToken(msg.sender, _amount, balances[msg.sender]);
    }

	/*
	* ERC20 required function declaration
	*/
	function balanceOf(address tokenOwner) public view returns (uint) {
		return balances[tokenOwner]; 
	}

	/*
	* ERC20 required function declaration
	*/
	function allowance(address _owner, address delegate) public view returns (uint) {
  		return allowed[owner][delegate];
	}

	/*
	* ERC20 required function declaration
	*/
	function transfer(address receiver, uint numTokens) public returns (bool) {
  		require(numTokens <= balances[msg.sender]);
  		balances[msg.sender] = balances[msg.sender]-numTokens;
  		balances[receiver] = balances[receiver] + numTokens;
  		emit Transfer(msg.sender, receiver, numTokens);
  		return true;
	}

	/*
	* @Params:
	* 	delegate = spender
	*	numTokens = tokens to be transfered
	*/
	function approve(address delegate, uint numTokens)  public returns (bool) {
		allowed[msg.sender][delegate] = numTokens;
  		emit Approval(msg.sender, delegate, numTokens);
  		return true;
	}

	/*
	* ERC20 required function declaration
	*/
	function transferFrom(address _owner, address buyer, uint numTokens) public returns (bool) {
  		require(numTokens <= balances[owner]);
  		require(numTokens <= allowed[owner][msg.sender]);
  		balances[owner] = balances[owner]-numTokens;
  		allowed[owner][msg.sender] = allowed[owner][msg.sender]-numTokens;
  		balances[buyer] = balances[buyer]+numTokens;
  		emit Transfer(owner, buyer, numTokens);
		return true;
	}

}
