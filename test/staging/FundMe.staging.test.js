const { ethers, getNamedAccounts, network } = require("hardhat")

const { developmentChains } = require("../../helper-hardhat-config")
const { assert } = require("chai")

developmentChains.includes(network.name)
    ? describe.skip
    : describe("FundMe", async function () {
          let fundMe, deployer
          const sendValue = ethers.utils.parseEther(1)
          beforeEach(async function () {
              deployer = (await getNamedAccounts()).deployer
              fundMe = await ethers.getContractFactory("FundMe")
          })

          it("Allows People to fund & withdraw", async function () {
              await fundMe.fund({ value: sendValue })
              await fundMe.withdraw()
              const endingBalance = await fundMe.provider.getBalance()
              assert.equal(endingBalance.toString(), "0")
          })
      })
