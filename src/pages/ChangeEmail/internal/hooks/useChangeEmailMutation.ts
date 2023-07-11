import { useCallback } from 'react';

import { LogicException, NoFetchedDataException } from '@/error';
import { paths } from '@/generated/schema';
import { useWhoAmI } from '@/hooks/useWhoAmI';
import { request } from '@/utils/axios';
import isNil from '@/utils/isNil';

export type EmailChangeArgs = NonNullable<
  paths['/api/v1/users/{user_id}/email-change']['post']['requestBody']
>['content']['application/json'];

export const useChangeEmailMutation = () => {
  const { userId } = useWhoAmI();
  console.log(userId);
  const mutate = useCallback(
    async (args: EmailChangeArgs) => {
      try {
        const response = await request({
          url: '/api/v1/users/{user_id}/email-change',
          method: 'post',
          data: { ...args },
          pathParams: {
            user_id: userId,
          },
        });
        // 200以外のステータスコードはここでハンドリング
        if (response.status !== 200) {
          throw new LogicException('エラーハンドリングしましょう');
        }

        if (isNil(response.data) || isNil(response.data.message)) {
          throw new NoFetchedDataException();
        }

        return {
          response,
        };
      } catch (error) {
        // TODO: バリデーションエラー拾う
        console.error(error);
      }
    },
    [userId]
  );

  return {
    mutate,
  } as const;
};
