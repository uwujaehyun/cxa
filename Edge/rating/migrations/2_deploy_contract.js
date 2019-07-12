var Transaction = artifacts.require('./Transaction.sol');

module.exports = function(deployer) {
    let deployItems = ['Dolor Sit', 'Jerry', 'Larry', 'Barry'].map(x => 
        web3.utils.asciiToHex(x))
        deployer.deploy(Transaction, deployItems, {gas: 6700000});
};