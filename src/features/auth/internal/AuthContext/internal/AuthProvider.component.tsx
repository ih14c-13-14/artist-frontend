import { ReactNode, useCallback } from 'react';

import { request } from '@/utils/axios';

import { AuthContext } from './AuthContext';
import { AuthContextType, SignInArgs } from './AuthContext.types';
import { getAuthTokenStore } from '../../authTokenStore';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const useSignIn = () => {
    const signIn = useCallback(async ({ email, password }: SignInArgs) => {
      console.log('email: ', email);
      console.log('password: ', password);
      try {
        const response = await request({
          url: '/api/v1/auth/signin',
          method: 'post',
          data: {
            email,
            password,
          },
        });
        console.log('response: ', response);
        /**
         * 雑に埋めたもの
         */
        const hardcodedToken =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5NTFDNUVCOC1FOUQ3LTQ4MjUtQTI2Qy0yRUZFNzY4NDk1NTMiLCJuYW1lIjoiQXJ0aXN0IiwiZXhwIjoxNTE2MjM5MDIyfQ.awtYQYEGdq1cpoIPnDg0zDZtLfRQt4nYmsr6Ab-3xlY';

        getAuthTokenStore().set(hardcodedToken);
      } catch (error) {
        // TODO: バリデーションエラー拾う
        console.error(error);
      }
    }, []);
    return { signIn };
  };

  const useSignOut = () => {
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

  const authValue: AuthContextType = {
    useSignIn,
    useSignOut,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
