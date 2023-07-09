import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { LogicException } from '@/error';
import { useAuth } from '@/features/auth';
import { useForm } from '@/hooks/useForm';
import { getRoutes } from '@/routes/getRoutes';
import validation, { resolver } from '@/utils/validation/validation';

const validationSchema = validation.object().shape({});

export const useSignIn = () => {
  const { useSignIn } = useAuth();
  const navigate = useNavigate();
  const routes = getRoutes();
  const { handleSubmit } = useForm({
    defaultValues: {},
    resolver: resolver(validationSchema),
  });

  const { signIn } = useSignIn();

  const formOnSubmitHandler = useCallback(() => {
    try {
      signIn({ email: 'hoge', password: 'fuga' });
    } catch (e) {
      throw new LogicException('エラーハンドリングしましょう');
    }
    navigate(routes.mapShow.path);
  }, [navigate, routes.mapShow.path, signIn]);

  return {
    formOnSubmitHandler: handleSubmit(formOnSubmitHandler),
  };
};
