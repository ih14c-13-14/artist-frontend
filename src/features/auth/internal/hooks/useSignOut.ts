import { request } from '@/utils/axios';

import { getAuthTokenStore } from '../authTokenStore';

export const useSignOut = () => {
  const signOut = async () => {
    try {
      await request({
        url: '/api/v1/auth/signout',
        method: 'delete',
      });
    } catch (error) {
      // TODO: バリデーションエラー拾う
      console.error(error);
    }
    getAuthTokenStore().flush();
  };

  return { signOut };
};
