import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getRoutes } from '@/routes/getRoutes';
import { DirectAccessState } from '@/routes/utils/types';
import isNil from '@/utils/isNil';

export const useChangeEmailSubmitted = () => {
  const routes = getRoutes();
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state as DirectAccessState;

  console.log(locationState);

  if (
    isNil(locationState) ||
    isNil(locationState.isDirectAccess) ||
    !locationState.isDirectAccess
  ) {
    console.log('navigate');
    navigate(routes.mapShow.path);
  }

  const onButtonClick = useCallback(() => {
    navigate(routes.mapShow.path);
  }, [navigate, routes.mapShow.path]);

  return { onButtonClick };
};
