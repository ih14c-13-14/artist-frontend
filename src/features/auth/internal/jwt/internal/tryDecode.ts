import jwtDecode, { InvalidTokenError } from 'jwt-decode';

import InvalidJWTException from './exceptions/InvalidJWTException';
import type { JWT } from './types';

/**
 * @throws {InvalidJWTException} JWT のパースに失敗したら送出
 */
const tryDecode = (jwt: JWT): unknown => {
  try {
    return jwtDecode(jwt);
  } catch (e) {
    if (e instanceof InvalidTokenError) {
      throw new InvalidJWTException(jwt);
    }

    throw e;
  }
};

export default tryDecode;
