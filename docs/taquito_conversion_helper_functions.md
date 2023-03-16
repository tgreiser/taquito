---
title: Taquito Conversion Helper Functions
author: Zainen Suzuki
---

## Description
Within Taquito we have supporting functions that will accept `PreparedOperation` and convert them into the neccessary params for other methods

current conversion helper functions:
- `toForge`
- `toDryRun`

## toForge

`toForge` is a helper function that will return the correct structured params for the `forge` method from the returned `PreparedOperation` 

it will take in the `PreparedOperation` and return the `ForgeParams`.

### Example 

```ts
  const preparedTransfer = await Tezos.prepare.transaction({ amount: 1, to: receivingPKH })

  const forgedBytes = await forger.forge(toForge(preparedTransfer))
```

## toDryRun

`toDryRun` is a helper function that will return the correct structured params for the `preapplyOperation` method from the `PreparepOperation` and sign bytes `prefixSig`

it will take in the `PreparedOperation` and the `signOp` from the signed operation and return the `PreapplyOperationParams`

### Example 

```ts
  const preparedTransfer = await Tezos.prepare.transaction({ amount: 1, to: receivingPKH })

  const forgedBytes = await forger.forge(toForge(preparedTransfer))
  const signOp = await Tezos.signer.sign(forgedBytes, new Uint8Array([3]));

  const preapply = await Tezos.rpc.preapplyOperations(toDryRun(preparedTransfer, signOp))
```


