---
title: Taquito Conversion Helper Functions
author: Zainen Suzuki
---

## Description
Within Taquito we have supporting functions that will accept `PreparedOperation` and convert them into the neccessary params for other methods

current conversion helper functions:
- `toForge`

## toForge

`toForge` is a helper function that will return the structured params for the `forge` method

it will take in the `PreparedOperation` and return the `ForgeParams`.

### Example 

```ts
  const preparedTransfer = await Tezos.prepare.transaction({ amount: 1, to: receivingPKH })

  const forgedBytes = await forger.forge(toForge(preparedTransfer))
```


