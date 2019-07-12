pragma solidity >=0.4.17;
// We have to specify what version of compiler this code will compile with

contract Transaction {
  /* mapping field below is equivalent to an associative array or hash.
  */
  
  mapping (bytes32 => uint64) public amountReceived;
  
  /* We will use an array of bytes32 to store the list of users
  */
  
  bytes32[] public userList;

  /* This is the constructor which will be called once when you
  deploy the contract to the blockchain. When we deploy the contract,
  we will pass an array of users for which users will give amount
  */
  constructor (bytes32[] memory userNames) public {
    userList = userNames;
  }

  // This function returns the total amount a user has received so far
  function totalAmountFor(bytes32 user) view public returns (uint64) {
    return amountReceived[user];
  }

  // This function increments the vote count for the specified user. Equivalent to upvoting
  function setAmount(bytes32 user, uint64 amount) public {
    amountReceived[user] += amount;
  }
}