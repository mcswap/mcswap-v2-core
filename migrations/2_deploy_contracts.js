var Factory = artifacts.require("./UniswapV2Factory.sol");

module.exports = async function(deployer) {
  
  await deployer.deploy(Factory, "TTCdQJZ6GKc6wh5GrRdkCbMcfw3mwRgpck"); 
  await Factory.deployed();

};
