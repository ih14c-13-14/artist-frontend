import { Control, UseFormRegister } from 'react-hook-form';

import { paths } from '@/generated/schema';

import { SignUpFormType } from '../../SignUp.types';

export type SignUpFormProps = {
  onBackToSignIn: () => void;
  onConfirm: () => void;
  register: UseFormRegister<SignUpFormType>;
  control: Control<SignUpFormType, {}>;
  isValid: boolean;
  isTermsAgreed: boolean;
  onTermsCheckboxChange: () => void;
  formChoices: paths['/api/v1/users/signup-page/choices']['get']['responses']['200']['content']['application/json'];
};
