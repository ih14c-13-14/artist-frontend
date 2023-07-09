import { memo } from 'react';

import { Button } from '@/features/ui/Button';
import assertNever from '@/utils/assertNever';

import { PAGE_TYPE } from './SignUp.constants';
import { useSignUp } from './SignUp.hooks';
import { SignUpForm } from './SignUpForm';
import { useSignUpForm } from './hooks/useSignUpForm';

const SignUp = () => {
  const {
    pageType,
    onBackToSignIn,
    onConfirm,
    onBackToInput,
    isTermsAgreed,
    onTermsCheckboxChange,
  } = useSignUp();
  const { register, control, handleSubmit, isValid } = useSignUpForm();

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
          />
        );
      case PAGE_TYPE.CONFIRM:
        return (
          <div>
            <h1>CONFIRM</h1>
            <Button onClick={onBackToInput}>戻る</Button>
          </div>
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
