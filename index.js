const core = require('@actions/core')
const getPrice = require('./get-price')

async function run() {
  try {
    const rpcNode = core.getInput('rpc-node')
    const aggregatorAddress = core.getInput('aggregator')
    const decimals = Number(core.getInput('decimals'))

    const price = await getPrice(rpcNode, aggregatorAddress, decimals)
    core.info(`Price: $${price.price}`)

    core.setOutput('int', price.int)
    core.setOutput('price', price.price)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
