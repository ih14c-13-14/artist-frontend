import { paths } from '@/generated/schema';

export type SignUpFormType = NonNullable<
  paths['/api/v1/auth/signup']['post']['requestBody']
>['content']['application/json'] & {
  passwordConfirm: string;
};
