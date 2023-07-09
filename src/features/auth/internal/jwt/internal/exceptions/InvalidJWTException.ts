import type { JWT } from '../types';

class InvalidJWTException extends Error {
  public constructor(jwt: JWT) {
    super(`invalid jwt: ${jwt}`);
  }
}

export default InvalidJWTException;
