import isNil from '@/utils/isNil';

import {
  InvalidJWTException,
  InvalidJWTPayloadException,
  type JWT,
  parse,
} from '../../jwt';

export const isAuthenticated = (jwt: JWT | null, _now?: number): boolean => {
  console.log('isAuthenticated');
  console.log(jwt);
  if (isNil(jwt)) {
    console.log('isNil');
    return false;
  }

  try {
    const payload = parse(jwt);
    // TODO: バックエンドと繋ぎこんだら直す
    // return (now ?? Date.now()) <= payload.exp * 1000;
    return 1516239022 <= payload.exp * 1000;
  } catch (e) {
    console.log(e);
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
