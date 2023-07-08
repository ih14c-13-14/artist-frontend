import { useState, ReactNode } from 'react';

import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  const signIn = () => {
    const hardcodedToken = 'your-hardcoded-jwt-token';
    setToken(hardcodedToken);
  };

  const signOut = () => {
    setToken(null);
  };

  const authValue = {
    token,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
