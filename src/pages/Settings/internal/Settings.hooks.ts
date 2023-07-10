import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { getRoutes } from '@/routes/getRoutes';

export const useSettings = () => {
  const routes = getRoutes();
  const navigate = useNavigate();

  const onMiscChangeClicked = useCallback(() => {
    navigate(routes.changeMisc.path);
  }, [navigate, routes.changeMisc.path]);

  const onEmailChangeClicked = useCallback(() => {
    navigate(routes.changeEmail.path);
  }, [navigate, routes.changeEmail.path]);

  const onPasswordChangeClicked = useCallback(() => {
    navigate(routes.changePassword.path);
  }, [navigate, routes.changePassword.path]);

  return {
    onMiscChangeClicked,
    onEmailChangeClicked,
    onPasswordChangeClicked,
  } as const;
};
