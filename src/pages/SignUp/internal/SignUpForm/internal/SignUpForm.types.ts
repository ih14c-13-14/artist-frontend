import { Control, UseFormRegister } from 'react-hook-form';

import { Choices } from '@/features/form/inputs/commons/types';

import { SignUpFormType } from '../../SignUp.types';

export type SignUpFormProps = {
  onBackToSignIn: () => void;
  onConfirm: () => void;
  register: UseFormRegister<SignUpFormType>;
  control: Control<SignUpFormType, {}>;
  isValid: boolean;
  isTermsAgreed: boolean;
  onTermsCheckboxChange: () => void;
  formChoices: {
    [key in keyof SignUpFormType]?: Choices<number>;
  } & {
    age_group: Choices<number>;
    gender: Choices<number>;
    prefecture: Choices<number>;
  };
};
