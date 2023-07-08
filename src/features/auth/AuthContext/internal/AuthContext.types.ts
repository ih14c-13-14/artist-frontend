import { paths } from '@/generated/schema';

type SignInArgs = NonNullable<
  paths['/api/v1/auth/signin']['post']['requestBody']
>['content']['application/json'];

export type AuthContextType = {
  token: string | null;
  signIn: (signInArgs: SignInArgs) => void;
  signOut: () => void;
};
