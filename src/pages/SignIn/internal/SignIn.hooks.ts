import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/features/auth/AuthContext';
import { useForm } from '@/hooks/useForm';
import { getRoutes } from '@/routes/getRoutes';
import validation, { resolver } from '@/utils/validation/validation';

const validationSchema = validation.object().shape({});

export const useSignIn = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const routes = getRoutes();
  const { handleSubmit } = useForm({
    defaultValues: {},
    resolver: resolver(validationSchema),
  });

  const formOnSubmitHandler = useCallback(() => {
    signIn({ email: 'hoge', password: 'fuga' });
    navigate(routes.mapShow.path);
  }, [navigate, routes.mapShow.path, signIn]);

  return {
    formOnSubmitHandler: handleSubmit(formOnSubmitHandler),
  };
};
