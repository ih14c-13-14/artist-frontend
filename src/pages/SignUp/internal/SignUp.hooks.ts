import { useCallback, useState } from 'react';
import { UseFormGetValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { getRoutes } from '@/routes/getRoutes';
import { DirectAccessState } from '@/routes/utils/types';
import { useAppSWR } from '@/utils/axios';

import { PAGE_TYPE } from './SignUp.constants';
import { SignUpFormType } from './SignUp.types';
import { SignUpArgs, useSignUpMutation } from './hooks/useSignUpMutation';

export const useSignUp = ({
  getValues,
}: {
  getValues: UseFormGetValues<SignUpFormType>;
}) => {
  const [pageType, setPageType] = useState<
    (typeof PAGE_TYPE)[keyof typeof PAGE_TYPE]
  >(PAGE_TYPE.INPUT);

  const [isTermsAgreed, setIsTermsAgreed] = useState(false);

  const onTermsCheckboxChange = useCallback(() => {
    setIsTermsAgreed(prev => !prev);
  }, []);

  const navigate = useNavigate();
  const routes = getRoutes();

  const onBackToSignIn = useCallback(() => {
    navigate(routes.signIn.path);
  }, [navigate, routes.signIn.path]);

  const onConfirm = useCallback(() => {
    setPageType(PAGE_TYPE.CONFIRM);
  }, []);

  const onBackToInput = useCallback(() => {
    setPageType(PAGE_TYPE.INPUT);
  }, []);

  const { signUp } = useSignUpMutation();
  const onSubmit = useCallback(async () => {
    const values = getValues();
    await signUp({
      email: values.email,
      password: values.password,
      age_group: values.age_group,
      gender: values.gender,
      prefecture: values.prefecture,
    } as const satisfies SignUpArgs);
    navigate(routes.signUpCompleted.path, {
      state: {
        isDirectAccess: true,
      } satisfies DirectAccessState,
    });
  }, [getValues, navigate, routes.signUpCompleted.path, signUp]);

  const { data: formChoices, isLoading } = useAppSWR({
    url: '/api/v1/users/signup-page/choices',
    method: 'get',
  });

  return {
    pageType,
    onBackToSignIn,
    onConfirm,
    onBackToInput,
    isTermsAgreed,
    onTermsCheckboxChange,
    onSubmit,
    isLoading,
    formChoices,
  };
};
