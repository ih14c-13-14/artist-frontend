import { paths } from '@/generated/schema';

export type ChangeMiscFormType = NonNullable<
  paths['/api/v1/users/{user_id}/others-change']['put']['requestBody']
>['content']['application/json'];

export type ChangeMiscFormChoices = Omit<
  NonNullable<
    paths['/api/v1/users/others-change-page/choices']['get']
  >['responses']['200']['content']['application/json'],
  'currentValues'
>;

export type UserCurrentSettings = NonNullable<
  NonNullable<
    paths['/api/v1/users/others-change-page/choices']['get']
  >['responses']['200']['content']['application/json']['currentValues']
>;
