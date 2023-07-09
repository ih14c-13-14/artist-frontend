import { Control, UseFormRegister } from 'react-hook-form';

import { SignUpFormType } from '../../SignUp.types';

export type SignUpFormProps = {
  onBackToSignIn: () => void;
  onConfirm: () => void;
  register: UseFormRegister<SignUpFormType>;
  control: Control<SignUpFormType, {}>;
  isValid: boolean;
  isTermsAgreed: boolean;
  onTermsCheckboxChange: () => void;
};
