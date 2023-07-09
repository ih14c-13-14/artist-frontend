import InvalidJWTPayloadException from './exceptions/InvalidJWTPayloadException';
import type { JWTPayload } from './types';

/**
 * @throws {InvalidJWTPayloadException} Payload が不正な場合に送出
 */
function validatePayload(payload: unknown): asserts payload is JWTPayload {
  console.log('validatePayload');
  console.log(payload);
  if (
    typeof payload === 'object' &&
    payload !== null &&
    Object.prototype.hasOwnProperty.call(payload, 'sub') &&
    Object.prototype.hasOwnProperty.call(payload, 'exp')
  ) {
    return;
  }

  throw new InvalidJWTPayloadException(payload);
}

export default validatePayload;
