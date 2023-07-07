import { useContext } from 'react';

import { LogicException } from '@/error';

import { AuthContext } from '../AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new LogicException('useAuth must be used within a AuthProvider');
  }
  return context;
};
