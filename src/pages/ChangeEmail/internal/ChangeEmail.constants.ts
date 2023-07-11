import { ChangeEmailFormType } from './ChangeEmail.types';

export const Fields = {
  email: 'email',
} satisfies {
  [key in keyof ChangeEmailFormType]: key;
};
