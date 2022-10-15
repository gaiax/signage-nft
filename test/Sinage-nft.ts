import { expect } from "chai";
import { ethers } from "hardhat";

describe("Sinage_nft Basic test", function () {
  it("Mint a new NFT and Should return the the NFT", async function () {
    const [deployer] = await ethers.getSigners();
    const SinageNft = await ethers.getContractFactory("Sinage_nft");
    const sinageNft = await SinageNft.deploy();
    await sinageNft.deployed();
    await sinageNft.safeMint(
      "0xBcd4042DE499D14e55001CcbB24a551F3b954096",
      "https://www.google.com/image.png",
      "name",
      "description",
    );
    const ret0 = await sinageNft.tokenURI(0);
    console.log(ret0);
    const b64result0 = ret0.replace("data:application/json;base64,", "");
    const strResult0 = Buffer.from(b64result0, "base64").toString();
    const jsonResult0 = JSON.parse(strResult0);
    console.log(jsonResult0)
    expect(jsonResult0.name).to.equal("name");
    expect(jsonResult0.image).to.equal("https://www.google.com/image.png");
    expect(jsonResult0.description).to.equal("description");
  });
});
    