import { useEffect, useMemo } from 'react';

import { getAuthTokenStore } from '../authTokenStore';
import { JWT } from '../jwt';

export type UseGuardProps = {
  /** true を返すときだけ表示を許可する */
  guardPredicate: (jwt: JWT | null) => boolean;
  /** ガード条件を満たさない場合に実行 */
  onRejected: () => void;
};

export function useGuard({ guardPredicate, onRejected }: UseGuardProps) {
  const jwt = getAuthTokenStore().get();

  const guardPassed = useMemo(() => guardPredicate(jwt), [guardPredicate, jwt]);

  useEffect(() => {
    if (!guardPassed) {
      onRejected();
    }
  }, [guardPassed, onRejected]);

  return { guardPassed };
}
