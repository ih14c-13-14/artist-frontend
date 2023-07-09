import { useState, ReactNode, useCallback } from 'react';

import { request } from '@/utils/axios';

import { AuthContext } from './AuthContext';
import { AuthContextType, SignInArgs } from './AuthContext.types';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

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
        const hardcodedToken = 'your-hardcoded-jwt-token';

        setToken(hardcodedToken);
      } catch (error) {
        // TODO: バリデーションエラー拾う
        console.error(error);
      }
    }, []);
    return { signIn };
  };

  const signOut = () => {
    setToken(null);
  };

  const authValue: AuthContextType = {
    token,
    useSignIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
