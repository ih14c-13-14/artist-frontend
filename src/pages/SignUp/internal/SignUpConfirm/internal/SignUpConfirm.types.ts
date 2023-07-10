import { UseFormGetValues } from 'react-hook-form';

import { SignUpFormType } from '../../SignUp.types';

export type SignUpConfirmProps = {
  onBackToInput: () => void;
  onSubmit: () => void;
  getValues: UseFormGetValues<SignUpFormType>;
};
