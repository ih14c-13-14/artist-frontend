import { paths } from '@/generated/schema';
import RecursiveNonNullable from '@/types/RecursiveNonNullable';

export type ChangeMiscFormType = NonNullable<
  paths['/api/v1/users/{user_id}/others-change']['put']['requestBody']
>['content']['application/json'];

export type ChangeMiscFormChoices = Omit<
  RecursiveNonNullable<
    NonNullable<
      paths['/api/v1/users/others-change-page/choices']['get']
    >['responses']['200']['content']['application/json']
  >,
  'currentValues'
>;

export type UserCurrentSettings = RecursiveNonNullable<
  NonNullable<
    NonNullable<
      paths['/api/v1/users/others-change-page/choices']['get']
    >['responses']['200']['content']['application/json']['currentValues']
  >
>;
