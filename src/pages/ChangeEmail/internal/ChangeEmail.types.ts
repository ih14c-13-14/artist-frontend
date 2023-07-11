import { paths } from '@/generated/schema';

export type ChangeEmailFormType = NonNullable<
  paths['/api/v1/users/{user_id}/email-change']['post']['requestBody']
>['content']['application/json'];
