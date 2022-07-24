const Migrations = artifacts.require('./Migrations.sol');
const Token = artifacts.require('./Token.sol');
const Factory = artifacts.require('./Factory.sol');
const Exchange = artifacts.require('./Exchange.sol');
const LP_Farming = artifacts.require('./LP_Farming.sol');
// const NFT = artifacts.require('./NFT.sol');
// const NFTMarket = artifacts.require('./NFTMarket.sol');
// const NFT_Factory = artifacts.require('./NFT_Factory.sol');
// const NFT_Farming = artifacts.require('./NFT_Farming.sol');
// const Betting = artifacts.require('./Betting.sol');
const Master = artifacts.require('./Master.sol');
const PODFactory = artifacts.require('./V2/PODFactory.sol');
const PODRouter = artifacts.require('./V2/PODRouter.sol');
const PODLibrary = artifacts.require('./V2/libraries/PODLibrary.sol');
require('dotenv').config();
const value = '1000000000000000000000000';

module.exports = async function (deployer) {
  await deployer.deploy(Migrations);
  // deployer.deploy(Token, 'KlayPod', 'POD', 18, value, 31536000);

  await deployer.deploy(Factory, '0x36FF06DA1dd8929b231ec7975986f745fC80c8EB');
  await deployer.deploy(
    Exchange,
    process.env.TOKEN_CONTRACT,
    process.env.TOKEN_CONTRACT,
    120
  );
  await deployer.deploy(LP_Farming, process.env.TOKEN_CONTRACT);
  await deployer.deploy(
    Master,
    process.env.TOKEN_CONTRACT,
    '10000000000000000000',
    604800
  );
  let factory = await deployer.deploy(PODFactory);
  console.log(factory.address);

  let temp = await deployer.deploy(PODLibrary);

  deployer.link(PODLibrary, PODRouter);
  // // await deployer.deploy(PODLibrary);

  deployer.deploy(PODRouter, factory.address);
};
