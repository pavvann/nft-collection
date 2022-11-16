const {ethers} = require("hardhat");
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL} = require("../constants");

async function main() {

  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  const metadataURL = METADATA_URL;

  const NFTContract = await ethers.getContractFactory("CryptoDevs")
  const deployedNFTContract = await NFTContract.deploy(metadataURL, whitelistContract);

  console.log(`Crypto Devs Contract Deployed at address: ${deployedNFTContract.address}`);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })