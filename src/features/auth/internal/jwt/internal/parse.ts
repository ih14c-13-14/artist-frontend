import tryDecode from './tryDecode';
import type { JWT, JWTPayload } from './types';
import validatePayload from './validatePayload';

/**
 * @throws {InvalidJWTException} JWT のパースに失敗したら送出
 * @throws {InvalidJWTPayloadException} Payload が不正な場合に送出
 */
const parse = (jwt: JWT): JWTPayload => {
  const payload = tryDecode(jwt);
  validatePayload(payload);
  return payload;
};

export default parse;
