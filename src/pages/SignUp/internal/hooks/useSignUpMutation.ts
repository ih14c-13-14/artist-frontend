import { useCallback } from 'react';

import { LogicException, NoFetchedDataException } from '@/error';
import { getAuthTokenStore } from '@/features/auth/';
import { paths } from '@/generated/schema';
import { request } from '@/utils/axios';
import isNil from '@/utils/isNil';

export type SignUpArgs = NonNullable<
  paths['/api/v1/auth/signup']['post']['requestBody']
>['content']['application/json'];

export const useSignUpMutation = () => {
  const signUp = useCallback(async (args: SignUpArgs) => {
    try {
      const response = await request({
        url: '/api/v1/auth/signup',
        method: 'post',
        data: { ...args },
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

  return {
    signUp,
  } as const;
};
