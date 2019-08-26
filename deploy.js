const HDWalletProvider=require('truffle-hdwallet-provider');
const Web3=require('web3');
const {interface, bytecode}=require('./compile');

const provider=new HDWalletProvider(
    //unlock wallet account
   'tomorrow position duck measure field mention wash range book wrist coast model',
   //infura api to get one node for test
   'https://rinkeby.infura.io/v3/821cce55d42c49a29f42d345f98122b9'
);

const web3=new Web3(provider);
const deploy=async ()=>{
    const accounts=await web3.eth.getAccounts();
    console.log('appempting to deploy from account', accounts[0]);
    const result=await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:'0x'+bytecode})
    .send({from: accounts[0]});
    console.log(interface);
    console.log('contract deployed to', result.options.address);
};
deploy();