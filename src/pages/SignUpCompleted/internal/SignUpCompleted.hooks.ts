import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getRoutes } from '@/routes/getRoutes';
import { DirectAccessState } from '@/routes/utils/types';

export const useSignUpCompleted = () => {
  const routes = getRoutes();
  const navigate = useNavigate();
  const location = useLocation();
  const { isDirectAccess } = location.state as DirectAccessState;

  if (!isDirectAccess) {
    navigate(routes.mapShow.path);
  }

  const onButtonClick = useCallback(() => {
    navigate(routes.mapShow.path);
  }, [navigate, routes.mapShow.path]);

  return { onButtonClick };
};
