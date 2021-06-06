# GitHub Action to get the current ETH/USD price

Uses [Chainlink Price Feed](https://docs.chain.link/docs/get-the-latest-price/#javascript).

Defaults to ETH/USD on Mainnet but can be used to fetch any Chainlink price feed by changing the aggregator address.

## Usage

```yaml
jobs:
  ethusd:
    runs-on: ubuntu-latest
    outputs:
      - price: ${{ steps.ethusd.outputs.price }}

    steps:
      - name: Get ETH/USD Price Feed
        uses: octobay/chainlink-pricefeed-action@v1
        id: ethusd
        with:
          rpc-node: ${{ secrets.RPC_NODE }}
  
  payment:
    runs-on: ubuntu-latest
    needs: [ ethusd ]
    if: ${{ needs.ethusd.price > 2600 && needs.ethusd.price < 2700 }}
    steps:
      - name: Pay Contributor
        uses: octobay/rewards-action@v1
        with:
          ...


```
