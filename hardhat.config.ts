import 'hardhat-typechain'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'
import 'hardhat-deploy'

import * as dotenv from 'dotenv';
dotenv.config();
const privateKey = process.env.PRIVATE_KEY;

const DEFAULT_COMPILER_SETTINGS = {
    version: '0.8.0',
    settings: {
        optimizer: {
            enabled: true,
            runs: 200,
        },
    }
}

export default {
    namedAccounts: {
        deployer: {
            97: process.env.OWNER
            // default: 0,
        }
    },
    solidity: {
        compilers: [DEFAULT_COMPILER_SETTINGS]
    },
    networks: {
        localhost: {
            url: 'http://127.0.0.1:8545/',
            accounts: [],
        },
        mainnet: {
            url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
            accounts: [privateKey],
        },
        rinkeby: {
            url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
            accounts: [privateKey],
        },
        bsc_testnet: {
            url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
            accounts: [privateKey],

        }
    },
    etherscan: {
        apiKey: process.env.BSC_KEY
    },
}