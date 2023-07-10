import { PasswordChangeFormType } from './ChangePassword.types';

export const PAGE_TYPE = {
  INPUT: 'input',
  CONFIRM: 'confirm',
} as const;

export const Fields = {
  current_password: 'current_password',
  new_password: 'new_password',
  new_password_confirm: 'new_password_confirm',
} satisfies {
  [key in keyof PasswordChangeFormType]: key;
};
