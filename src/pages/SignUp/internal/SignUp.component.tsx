import { memo } from 'react';

import assertNever from '@/utils/assertNever';

import { PAGE_TYPE } from './SignUp.constants';
import { useSignUp } from './SignUp.hooks';
import { SignUpConfirm } from './SignUpConfirm';
import { SignUpForm } from './SignUpForm';
import { useSignUpForm } from './hooks/useSignUpForm';

const SignUp = () => {
  const { formChoices, register, control, handleSubmit, isValid, getValues } =
    useSignUpForm();
  const {
    pageType,
    onBackToSignIn,
    onConfirm,
    onBackToInput,
    isTermsAgreed,
    onTermsCheckboxChange,
    onSubmit,
  } = useSignUp({ getValues });

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
