import { ChangeMiscFormType } from './ChangeMisc.types';

export const PAGE_TYPE = {
  INPUT: 'input',
  CONFIRM: 'confirm',
} as const;

export const Fields = {
  'age-group': 'age-group',
  gender: 'gender',
  prefectures: 'prefectures',
} satisfies {
  [key in keyof ChangeMiscFormType]: key;
};
