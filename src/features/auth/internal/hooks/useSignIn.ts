import { useCallback } from 'react';

import { LogicException, NoFetchedDataException } from '@/error';
import { paths } from '@/generated/schema';
import { request } from '@/utils/axios';
import isNil from '@/utils/isNil';

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
      // 200以外のステータスコードはここでハンドリング
      if (response.status !== 200) {
        throw new LogicException('エラーハンドリングしましょう');
      }

      if (isNil(response.data) || isNil(response.data.access_token)) {
        throw new NoFetchedDataException();
      }
      getAuthTokenStore().set(response.data.access_token);

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
