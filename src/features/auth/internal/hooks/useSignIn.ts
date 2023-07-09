import { useCallback } from 'react';

import { paths } from '@/generated/schema';
import { request } from '@/utils/axios';

import { getAuthTokenStore } from '../authTokenStore';

export type SignInArgs = NonNullable<
  paths['/api/v1/auth/signin']['post']['requestBody']
>['content']['application/json'];

export const useSignIn = () => {
  const signIn = useCallback(async ({ email, password }: SignInArgs) => {
    try {
      const response = await request({
        url: '/api/v1/auth/signin',
        method: 'post',
        data: {
          email,
          password,
        },
      });
      /**
       * バックエンドの発行したもの
       */
      const hardcodedToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJzdWIiOiIwMTg5M2IyNy0wMzc3LTcwMDAtOTI0Yy1lNjVlNzlkYmYyNjgiLCJpYXQiOjE2ODg5MTU4MzQsImV4cCI6MTY4ODkxNTgzN30.m_h_4Kt2p09uhSBTbrebtyD5uT8ogXNTMB9zyyd8-7Y';

      getAuthTokenStore().set(hardcodedToken);

      return {
        response,
      };
    } catch (error) {
      // TODO: バリデーションエラー拾う
      console.error(error);
    }
  }, []);
  return { signIn };
};
