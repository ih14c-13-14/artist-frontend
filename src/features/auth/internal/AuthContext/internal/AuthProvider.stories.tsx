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
  const { useSignIn, signOut } = useAuth();
  const { guardPassed } = useGuard({
    onRejected: () => {
      console.log('onRejected');
    },
    guardPredicate: jwt => {
      return !!jwt;
    },
  });

  const { signIn } = useSignIn();
  return (
    <div>
      <h1>{guardPassed ? 'Logged in' : 'Logged out'}</h1>
      {!guardPassed && (
        <Button
          onClick={() => {
            signIn({ email: 'hoge', password: 'fuga' });
          }}
        >
          Login
        </Button>
      )}
      {guardPassed && <Button onClick={signOut}>Logout</Button>}
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
