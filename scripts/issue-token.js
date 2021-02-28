const DeFi = artifacts.require('DeFi')

module.exports = async function(callback) {
  let defi = await DeFi.deployed()
  await defi.issueTokens()

  // Code for issuing token goes here
  console.log("Tokens issued!")
  callback()
}
