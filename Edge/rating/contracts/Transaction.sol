pragma solidity >=0.4.17;
// We have to specify what version of compiler this code will compile with

contract Transaction {
  /* mapping field below is equivalent to an associative array or hash.
  */
  
  mapping (bytes32 => uint64) public amountReceived;
  mapping (bytes32 => uint64) public duration;
  mapping (bytes32 => uint64) public returnValue;
  mapping (bytes32 => string) public frequency;

  
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
  function totalAmountFor(bytes32 user) public view returns (uint64) {
    return amountReceived[user];
  }

  // This function increments the vote count for the specified user. Equivalent to upvoting
  function setAmount(bytes32 user, uint64 amount) public {
    amountReceived[user] += amount;
  }

  function setFrequency(bytes32 user, string memory freq) public {
    frequency[user] = freq;
  }

  function getFrequency(bytes32 user) public view returns (string memory) {
    return frequency[user];
  }

  function setDuration(bytes32 user, uint64 dura) public {
    duration[user] = dura;
  }

  function getDuration(bytes32 user) public view returns (uint64) {
    return duration[user];
  }

  function setReturnValue(bytes32 user, uint64 returnVal) public {
    returnValue[user] = returnVal;
  }

  function getReturnValue(bytes32 user) public view returns (uint64) {
    return returnValue[user];
  }
 
}