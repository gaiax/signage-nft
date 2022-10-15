import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  const SinageNft = await ethers.getContractFactory("Sinage_nft");
  const sinageNft = await SinageNft.deploy();

  await sinageNft.deployed();
  console.log(sinageNft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
