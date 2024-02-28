require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
console.log('Api urls',API_URL, PRIVATE_KEY);

module.exports = {
  solidity: "0.8.19",
  networks:{
    sepolia:{
      url:API_URL,
      accounts:[`0x${PRIVATE_KEY}`]
    },
  }
};