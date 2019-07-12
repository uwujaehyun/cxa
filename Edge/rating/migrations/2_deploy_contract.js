var Transaction = artifacts.require('./Transaction.sol');

module.exports = function(deployer) {
    let deployItems = ['Lorem Ipsum', 'Amet Consectetur', 'Adipisicing Elit', 'Delectus Ipsam', 'Voluptate Inventore'].map(x => 
        web3.utils.asciiToHex(x))
        deployer.deploy(Transaction, deployItems, {gas: 6700000});
};