import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    ganache: {
      url: "http://localhost:7545",
      accounts:
        ["4c9a1485b8a5c21131d5bad9a9f54823e761e6942c47edf1b5851d871da1f719"],
    },
  }
};

export default config;
