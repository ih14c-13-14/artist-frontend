import { NoAuthorizedException } from '@/error';
import { getAuthTokenStore } from '@/features/auth';
// HACK: API経由で取れないので...
import { parse } from '@/features/auth/internal/jwt'; // eslint-disable-line @typescript-eslint/no-restricted-imports

export const useWhoAmI = () => {
  const jwt = getAuthTokenStore().get();
  if (!jwt) throw new NoAuthorizedException();
  const { sub: userId } = parse(jwt);

  return {
    userId,
  } as const;
};
