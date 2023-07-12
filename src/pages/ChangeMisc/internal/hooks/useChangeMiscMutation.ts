import { useCallback } from 'react';

import { LogicException } from '@/error';
import { paths } from '@/generated/schema';
import { request } from '@/utils/axios';

export type ChangeMiscArgs = NonNullable<
  paths['/api/v1/users/{user_id}/others-change']['put']['requestBody']
>['content']['application/json'];

export const useChangeMiscMutation = () => {
  const mutate = useCallback(async (args: ChangeMiscArgs) => {
    try {
      const response = await request({
        url: '/api/v1/users/{user_id}/others-change',
        method: 'put',
        data: { ...args },
      });
      // 200以外のステータスコードはここでハンドリング
      if (response.status !== 200) {
        throw new LogicException('エラーハンドリングしましょう');
      }

      return {
        response,
      };
    } catch (error) {
      // TODO: バリデーションエラー拾う
      console.error(error);
    }
  }, []);

  return {
    mutate,
  } as const;
};
