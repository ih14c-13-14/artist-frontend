import { paths } from '@/generated/schema';

export type SignInFormType = NonNullable<
  paths['/api/v1/auth/signin']['post']['requestBody']
>['content']['application/json'];
