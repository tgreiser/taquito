import { ExternalError } from '@taquito/core';

export { InvalidDerivationPathError } from '@taquito/core';

/**
 *  @category Error
 *  @description Error that indicates an invalid or unparseable ledger response
 */
export class InvalidLedgerResponseError extends ExternalError {
  public name = 'InvalidLedgerResponseError';
  constructor(public message: string) {
    super(message);
  }
}

/**
 *  @category Error
 *  @description Error that indicates a failure when trying to retrieve a Public Key from Ledger signer
 */
export class PublicKeyRetrievalError extends ExternalError {
  public name = 'PublicKeyRetrievalError';
  constructor() {
    super(`Unable to retrieve Public Key from Ledger. Please Check your prompt/connection with your ledger`);
  }
}

/**
 *  @category Error
 *  @description Error that indicates a failure when trying to retrieve a Public Key Hash from Ledger signer
 */
export class PublicKeyHashRetrievalError extends ExternalError {
  public name = 'PublicKeyHashRetrievalError';
  constructor() {
    super(`Unable to retrieve Public Key Hash from Ledger. Please Check your prompt/connection with your ledger`);
  }
}
