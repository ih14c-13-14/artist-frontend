import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { LogicException } from '@/error';
import { useSignIn as useSignInMutate } from '@/features/auth';
import { useForm } from '@/hooks/useForm';
import { getRoutes } from '@/routes/getRoutes';
import validation, { resolver } from '@/utils/validation/validation';

const validationSchema = validation.object().shape({});

export const useSignIn = () => {
  const navigate = useNavigate();
  const routes = getRoutes();
  const { handleSubmit } = useForm({
    defaultValues: {},
    resolver: resolver(validationSchema),
  });

  const { signIn } = useSignInMutate();

  const formOnSubmitHandler = useCallback(async () => {
    try {
      await signIn({ email: 'hoge', password: 'fuga' });
    } catch (e) {
      throw new LogicException('エラーハンドリングしましょう');
    }
    navigate(routes.mapShow.path);
  }, [navigate, routes.mapShow.path, signIn]);

  return {
    formOnSubmitHandler: handleSubmit(formOnSubmitHandler),
  };
};
