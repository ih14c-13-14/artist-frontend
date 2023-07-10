import isNil from '@/utils/isNil';

import {
  InvalidJWTException,
  InvalidJWTPayloadException,
  type JWT,
  parse,
  JWTExpiredException,
} from '../../jwt';

export const isAuthenticated = (jwt: JWT | null, now?: number): boolean => {
  if (isNil(jwt)) {
    return false;
  }

  try {
    const payload = parse(jwt);
    const isTokenExpired = payload.exp * 1000 < (now ?? Date.now());
    if (isTokenExpired) throw new JWTExpiredException();
    return !isTokenExpired;
  } catch (e) {
    if (
      e instanceof InvalidJWTException ||
      e instanceof InvalidJWTPayloadException
    ) {
      return false;
    }
    throw e;
  }
};

export const isGuest = (jwt: JWT | null, now?: number): boolean => {
  return !isAuthenticated(jwt, now);
};
