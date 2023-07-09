import { SignUpFormType } from './SignUp.types';

export const PAGE_TYPE = {
  INPUT: 'input',
  CONFIRM: 'confirm',
} as const;

export const Fields = {
  email: 'email',
  password: 'password',
  passwordConfirm: 'passwordConfirm',
  age_group: 'age_group',
  gender: 'gender',
  prefecture: 'prefecture',
} satisfies {
  [key in keyof SignUpFormType]: key;
};
