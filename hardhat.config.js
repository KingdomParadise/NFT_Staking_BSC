require('dotenv').config()

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    bscTestnet: {
      url: process.env.URL_BSC_TESTNET || "",
      accounts:
        process.env.PRIVATE_KEY_BSC_TESTNET !== undefined
          ? [process.env.PRIVATE_KEY_BSC_TESTNET]
          : [],
    },
    bsc: {
      url: process.env.URL_BSC || "",
      accounts:
        process.env.PRIVATE_KEY_BSC !== undefined
          ? [process.env.PRIVATE_KEY_BSC]
          : [],
    },
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_API_KEY,
  },
};
