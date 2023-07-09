import { paths } from '@/generated/schema';

export type SignInArgs = NonNullable<
  paths['/api/v1/auth/signin']['post']['requestBody']
>['content']['application/json'];

export type AuthContextType = {
  useSignIn: () => {
    signIn: ({ email, password }: SignInArgs) => Promise<void>;
  };
  useSignOut: () => {
    signOut: () => Promise<void>;
  };
};
