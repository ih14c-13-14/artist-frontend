import { ChangeMiscFormType } from './ChangeMisc.types';

export const PAGE_TYPE = {
  INPUT: 'input',
  CONFIRM: 'confirm',
} as const;

export const Fields = {
  age_group: 'age_group',
  gender: 'gender',
  prefecture: 'prefecture',
} satisfies {
  [key in keyof ChangeMiscFormType]: key;
};
