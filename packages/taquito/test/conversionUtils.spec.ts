import { toForge } from '../src/conversionUtils';
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
});
