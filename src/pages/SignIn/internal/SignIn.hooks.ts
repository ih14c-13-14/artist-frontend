import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/features/auth/AuthContext';
import { getRoutes } from '@/routes/getRoutes';

export const useSignIn = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const routes = getRoutes();
  const formOnSubmitHandler = useCallback(() => {
    signIn();
    navigate(routes.mapShow.path);
  }, [navigate, routes.mapShow.path, signIn]);

  return {
    formOnSubmitHandler,
  };
};
