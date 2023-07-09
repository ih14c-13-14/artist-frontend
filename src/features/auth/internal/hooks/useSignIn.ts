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
       * 雑に埋めたもの
       */
      const hardcodedToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5NTFDNUVCOC1FOUQ3LTQ4MjUtQTI2Qy0yRUZFNzY4NDk1NTMiLCJuYW1lIjoiQXJ0aXN0IiwiZXhwIjoxNTE2MjM5MDIyfQ.awtYQYEGdq1cpoIPnDg0zDZtLfRQt4nYmsr6Ab-3xlY';

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
