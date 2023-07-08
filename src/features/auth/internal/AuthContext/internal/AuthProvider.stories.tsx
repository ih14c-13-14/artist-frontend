import type { Meta } from '@storybook/react';

import { Button } from '@/features/ui/Button';

import AuthProvider from './AuthProvider.component';
import { useAuth } from './hooks/useAuth';
import { useGuard } from './hooks/useGuard';

const AuthProviderStory: Meta<typeof AuthProvider> = {
  component: AuthProvider,
};

export default AuthProviderStory;

const Internal = () => {
  const { signIn, signOut } = useAuth();
  const { isLogin } = useGuard();
  return (
    <div>
      <h1>{isLogin ? 'Logged in' : 'Logged out'}</h1>
      {!isLogin && (
        <Button
          onClick={() => {
            signIn({ email: 'hoge', password: 'fuga' });
          }}
        >
          Login
        </Button>
      )}
      {isLogin && <Button onClick={signOut}>Logout</Button>}
    </div>
  );
};

export const Default = () => {
  return (
    <AuthProvider>
      <Internal />
    </AuthProvider>
  );
};
