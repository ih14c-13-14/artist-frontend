import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useWhoAmI } from '@/hooks/useWhoAmI';
import { getRoutes } from '@/routes/getRoutes';
import { useAppSWR } from '@/utils/axios';

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

  const { userId } = useWhoAmI();

  const { data, isLoading } = useAppSWR({
    url: '/api/v1/users/{user_id}/info',
    method: 'get',
    pathParams: {
      user_id: userId,
    },
  });

  return {
    onMiscChangeClicked,
    onEmailChangeClicked,
    onPasswordChangeClicked,
    data,
    isLoading,
  } as const;
};
