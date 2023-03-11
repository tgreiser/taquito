import { toDryRun, toForge } from '../src/commonUtils';
import { PreparedOperation } from '../src/prepare';
import { preparedTransactionMock } from './helpers';

describe('test outcome of common util functions', () => {
  it('Verify toForge util function return', () => {
    const { contents, branch } = preparedTransactionMock.opOb;

    const result = toForge(preparedTransactionMock as PreparedOperation);
    expect(result).toEqual({
      contents,
      branch,
    });
  });

  it('Verify toDryRun util function return', () => {
    const { contents, branch, protocol } = preparedTransactionMock.opOb;

    const result = toDryRun(
      preparedTransactionMock as PreparedOperation,
      'spsig18HJsGY8pVAeHNHE7hURPsFfkGGBuH7cVifwabCAby2iN5R5ckNUqWfPBr8KxwUMJfrug1DZS1fjGzyemWDgukbAeRpwUe'
    );
    expect(result).toEqual([
      {
        contents,
        branch,
        protocol,
        signature:
          'spsig18HJsGY8pVAeHNHE7hURPsFfkGGBuH7cVifwabCAby2iN5R5ckNUqWfPBr8KxwUMJfrug1DZS1fjGzyemWDgukbAeRpwUe',
      },
    ]);
  });
});
