import { memo } from 'react';

import { NoFetchedDataException } from '@/error';
import assertNever from '@/utils/assertNever';
import isNil from '@/utils/isNil';

import { PAGE_TYPE } from './SignUp.constants';
import { useSignUp } from './SignUp.hooks';
import { SignUpConfirm } from './SignUpConfirm';
import { SignUpForm } from './SignUpForm';
import { useSignUpForm } from './hooks/useSignUpForm';

const SignUp = () => {
  const { register, control, handleSubmit, isValid, getValues } =
    useSignUpForm();
  const {
    pageType,
    onBackToSignIn,
    onConfirm,
    onBackToInput,
    isTermsAgreed,
    onTermsCheckboxChange,
    onSubmit,
    isLoading,
    formChoices,
  } = useSignUp({ getValues });

  // TODO: ローディング中のフォールバックUIを考えておく
  if (isLoading) return <div>loading...</div>;
  if (isNil(formChoices)) throw new NoFetchedDataException();

  const Page = memo(() => {
    switch (pageType) {
      case PAGE_TYPE.INPUT:
        return (
          <SignUpForm
            onBackToSignIn={onBackToSignIn}
            onConfirm={onConfirm}
            register={register}
            control={control}
            isValid={isValid}
            isTermsAgreed={isTermsAgreed}
            onTermsCheckboxChange={onTermsCheckboxChange}
            formChoices={formChoices}
          />
        );
      case PAGE_TYPE.CONFIRM:
        return (
          <SignUpConfirm
            onBackToInput={onBackToInput}
            onSubmit={onSubmit}
            getValues={getValues}
          />
        );
      default:
        assertNever(pageType);
    }
    return pageType;
  });

  return (
    <form onSubmit={handleSubmit}>
      <Page />
    </form>
  );
};

export default SignUp;
