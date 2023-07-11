import { useCallback } from 'react';
import { UseFormGetValues, UseFormHandleSubmit } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { getRoutes } from '@/routes/getRoutes';
import { DirectAccessState } from '@/routes/utils/types';

import { ChangeEmailFormType } from './ChangeEmail.types';
import { useChangeEmailMutation } from './hooks/useChangeEmailMutation';

export type UseChangeEmailProps = {
  handleSubmit: UseFormHandleSubmit<ChangeEmailFormType, undefined>;
  getValues: UseFormGetValues<ChangeEmailFormType>;
};

export const useChangeEmail = ({
  handleSubmit,
  getValues,
}: UseChangeEmailProps) => {
  const { mutate: mutate } = useChangeEmailMutation();
  const routes = getRoutes();
  const navigate = useNavigate();

  const onSubmit = useCallback(async () => {
    const { email } = getValues();
    await mutate({ email } as const);

    navigate(routes.changeEmailSubmitted.path, {
      state: {
        isDirectAccess: true,
      } satisfies DirectAccessState,
    });
  }, [getValues, mutate, navigate, routes.changeEmailSubmitted.path]);

  return {
    onSubmit: handleSubmit(onSubmit),
  };
};
