import { PreparedOperation } from './prepare';
import { ForgeParams } from './taquito';

export function toForge({ opOb: { contents, branch } }: PreparedOperation): ForgeParams {
  return {
    branch,
    contents,
  };
}

export const toDryRun = (
  { opOb: { contents, branch, protocol } }: PreparedOperation,
  sig: {
    bytes: string;
    sig: string;
    prefixSig: string;
    sbytes: string;
  }
) => {
  return [{ contents, branch, protocol, signature: sig.prefixSig }];
};
