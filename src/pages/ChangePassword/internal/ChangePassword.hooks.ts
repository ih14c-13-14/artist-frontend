import { useCallback } from 'react';
import { UseFormGetValues, UseFormHandleSubmit } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { getRoutes } from '@/routes/getRoutes';

import { PasswordChangeFormType } from './ChangePassword.types';
import { usePasswordChangeMutation } from './hooks/usePasswordMutation';

export type UseChangePasswordProps = {
  handleSubmit: UseFormHandleSubmit<PasswordChangeFormType, undefined>;
  getValues: UseFormGetValues<PasswordChangeFormType>;
};

export const useChangePassword = ({
  handleSubmit,
  getValues,
}: UseChangePasswordProps) => {
  const { mutate: mutate } = usePasswordChangeMutation();
  const routes = getRoutes();
  const navigate = useNavigate();

  const onSubmit = useCallback(async () => {
    const { new_password, current_password } = getValues();
    await mutate({
      new_password,
      current_password,
    } as const);

    // TODO: どこに遷移するか考える
    navigate(routes.mapShow.path);
  }, [getValues, mutate, navigate, routes.mapShow.path]);

  return {
    onSubmit: handleSubmit(onSubmit),
  };
};
