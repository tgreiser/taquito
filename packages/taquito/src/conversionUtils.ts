import { PreparedOperation } from './prepare';
import { ForgeParams } from './taquito';

export function toForge({ opOb: { contents, branch } }: PreparedOperation): ForgeParams {
  return {
    branch,
    contents,
  };
}
