const core = require('@actions/core')
const getPrice = require('./get-price')

async function run() {
  try {
    const price = await getPrice()
    core.info(price)

    core.setOutput('int', price.int)
    core.setOutput('price', price.price)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
