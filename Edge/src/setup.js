import Web3 from 'web3';

const web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

let TransactionABI=[{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"amountReceived","outputs":[{"name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"userList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"userNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"name":"user","type":"bytes32"}],"name":"totalAmountFor","outputs":[{"name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"bytes32"},{"name":"amount","type":"uint64"}],"name":"setAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
let TransactionAddress='0x01244b1B40cb67E5055C1942171f864Af4552fba';
web3.eth.defaultAccount = web3.eth.accounts[0]


const TransactionContract=web3.eth.contract(TransactionABI).at(TransactionAddress);
export {TransactionContract};