import { paths } from '@/generated/schema';

export type ChangeMiscFormType = NonNullable<
  paths['/api/v1/users/{user_id}/others-change']['put']['requestBody']
>['content']['application/json'];

export type ChangeMiscFormChoices = Omit<
  paths['/api/v1/users/others-change-page/choices']['get']['responses']['200']['content']['application/json'],
  'currentValues'
>;

export type UserCurrentSettings =
  paths['/api/v1/users/others-change-page/choices']['get']['responses']['200']['content']['application/json']['currentValues'];
