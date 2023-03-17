import { LocalForger } from "@taquito/local-forging";
import { toForge } from "@taquito/taquito";
import { CONFIGS } from "./config";



CONFIGS().forEach(({ lib, setup, createAddress }) => {
  const Tezos = lib;
  const forger = new LocalForger();

  describe(`Test taquito common util functions in context`, () => {
    beforeEach(async (done) => {
      await setup();
      done();
    })

    test('Verify that toDryRun returns executable for preapplyOperations', async (done) => {
      const reciever = await createAddress();
      const pkh = await reciever.signer.publicKeyHash();
      const preparedTransfer = await Tezos.prepare.transaction({ amount: 1, to: pkh });

      const preapplyParams = await Tezos.prepare.toPreapplyParams(preparedTransfer)

      const preapply = await Tezos.rpc.preapplyOperations(preapplyParams);

      if (preapply[0].contents[0].kind === 'reveal') {
        expect(preapply[0].contents[0].kind).toEqual('reveal');
        expect(preapply[0].contents[1].kind).toEqual('transaction');
      } else {
        expect(preapply[0].contents[0].kind).toEqual('transaction');
      }

      done();
    });

    it('Verify that toForge is exectuable for both local forger and rpc.forgeOperations', async (done) => {
      const reciever = await createAddress();
      const pkh = await reciever.signer.publicKeyHash();
      const preparedTransfer = await Tezos.prepare.transaction({ amount: 1, to: pkh });

      const forged = await forger.forge(toForge(preparedTransfer));
      const rpcForged = await Tezos.rpc.forgeOperations(toForge(preparedTransfer));

      expect(forged).toEqual(rpcForged);

      done();
    })
  });
})
