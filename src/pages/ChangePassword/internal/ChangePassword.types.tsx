import { paths } from '@/generated/schema';

export type PasswordChangeFormType = NonNullable<
  paths['/api/v1/users/{user_id}/password-change']['put']['requestBody']
>['content']['application/json'] & {
  new_password_confirm: string;
};
