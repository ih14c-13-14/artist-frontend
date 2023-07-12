import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getRoutes } from '@/routes/getRoutes';
import { DirectAccessState } from '@/routes/utils/types';
import isNil from '@/utils/isNil';

export const useInvalidDirectAccess = () => {
  const routes = getRoutes();
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state as DirectAccessState;

  useEffect(() => {
    if (
      isNil(locationState) ||
      isNil(locationState.isDirectAccess) ||
      !locationState.isDirectAccess
    ) {
      navigate(routes.mapShow.path);
    }
  }, [locationState, navigate, routes.mapShow.path]);
};
