const networkConfig = {
    // Price Feed Address, values can be obtained at https://docs.chain.link/data-feeds/price-feeds/addresses
    11155111: {
        name: "sepolia",
        ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
    },
    31337: {
        name: "localhost",
    },
}
const developmentChains = ["hardhat", "localhost"]

const DECIMALS = 8
const INITIAL_ANSWERS = 20000000000

module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INITIAL_ANSWERS,
}
