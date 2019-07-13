var Transaction = artifacts.require('./Transaction.sol');

module.exports = function(deployer) {
    let deployItems = ["Swee Boon Keat's Chicken Rice", "Julianne's Laksa", "Lee's Banmian", 'ECP Prawn Noodle', 'Sea Rd Rojak'].map(x => 
        web3.utils.asciiToHex(x))
        deployer.deploy(Transaction, deployItems, {gas: 6700000});
};