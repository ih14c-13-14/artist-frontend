import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { LogicException } from '@/error';
import { useSignIn as useSignInMutate } from '@/features/auth';
import { useForm } from '@/hooks/useForm';
import { getRoutes } from '@/routes/getRoutes';
import validation, { resolver } from '@/utils/validation/validation';

import { SignInFormType } from './SignIn.types';

const validationSchema = validation.object().shape({
  email: validation.string().email().required(),
  password: validation.string().password().required(),
} satisfies {
  [key in keyof SignInFormType]: unknown;
});

export const useSignIn = () => {
  const navigate = useNavigate();
  const routes = getRoutes();
  const { register, getValues, handleSubmit } = useForm<SignInFormType>({
    defaultValues: {},
    resolver: resolver(validationSchema),
  });

  const { signIn } = useSignInMutate();

  const formOnSubmitHandler = useCallback(async () => {
    try {
      const { email, password } = getValues();
      await signIn({ email, password });
    } catch (e) {
      throw new LogicException('エラーハンドリングしましょう');
    }
    navigate(routes.mapShow.path);
  }, [getValues, navigate, routes.mapShow.path, signIn]);

  const handlePasswordForget = useCallback(() => {
    navigate(routes.passwordForget.path);
  }, [navigate, routes.passwordForget.path]);

  const handleSignUp = useCallback(() => {
    navigate(routes.signUp.path);
  }, [navigate, routes.signUp.path]);

  return {
    formOnSubmitHandler: handleSubmit(formOnSubmitHandler),
    handlePasswordForget,
    handleSignUp,
    register,
  } as const;
};
