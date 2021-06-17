# Swap V2

Swap v2 is a Tron port of Uniswap v2. In-depth documentation on Uniswap V2 is available at [uniswap.org](https://uniswap.org/docs).

## Contract Addresses

| Chain   | Address                                                                                                       |
| ------- | ------------------------------------------------------------------------------------------------------------- |
| Mainnet | [TCch9ApVsfUMqY1RVijRczrKHjHWguf5sJ](https://tronscan.org/#/contract/TCch9ApVsfUMqY1RVijRczrKHjHWguf5sJ)      |
| Shasta    | [TSveJsqewjoNAnPm3V5M6ap8N2SRt64uvg](https://shasta.tronscan.org/#/contract/TSveJsqewjoNAnPm3V5M6ap8N2SRt64uvg) |

Compiled with `solc 0.5.16+commit.9c3226ce.Emscripten.clang`.

# Local Development

The following assumes the use of `node v12`.

```
nvm use 12
```

## Install Dependencies

`npm install`

## Compile Contracts

`npm run compile`

## Run Tests

`npm test`

## Tron Deployment

Note: use Node <12 to use Truffle...

`npm run deploy` or `npm run deploy:shasta`.
