import { useContext } from 'react';

import { AuthContext } from '../AuthContext';

export function useGuard() {
  const authContext = useContext(AuthContext);
  if (authContext === undefined) {
    throw new Error('useGuard must be used within a AuthProvider');
  }

  const isLogin = Boolean(authContext.token);

  return { isLogin };
}
