export type JWT = string;

export type JWTPayload = {
  /**
   * ユーザー ID
   */
  sub: 'string';

  /**
   * 有効期限
   * @example 1614556800
   */
  exp: number;
};
