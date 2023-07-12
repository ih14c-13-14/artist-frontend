import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useInvalidDirectAccess } from '@/features/navigate/hooks/useInvalidDirectAccess';
import { getRoutes } from '@/routes/getRoutes';

export const useSignUpCompleted = () => {
  useInvalidDirectAccess();
  const routes = getRoutes();
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate(routes.mapShow.path);
  }, [navigate, routes.mapShow.path]);

  return { onButtonClick };
};
