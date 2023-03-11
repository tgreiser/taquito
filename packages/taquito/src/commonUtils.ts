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
  prefixSig: string
) => {
  return [{ contents, branch, protocol, signature: prefixSig }];
};
