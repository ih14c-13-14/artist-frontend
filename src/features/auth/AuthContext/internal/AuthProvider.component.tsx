import { useState, ReactNode } from 'react';

import { AuthContext } from './AuthContext';
import { AuthContextType } from './AuthContext.types';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  const signIn = ({ email, password }: { email: string; password: string }) => {
    console.log('AuthProvider.signIn');
    console.log('email: ', email);
    console.log('password: ', password);
    const hardcodedToken = 'your-hardcoded-jwt-token';
    setToken(hardcodedToken);
  };

  const signOut = () => {
    setToken(null);
  };

  const authValue: AuthContextType = {
    token,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
