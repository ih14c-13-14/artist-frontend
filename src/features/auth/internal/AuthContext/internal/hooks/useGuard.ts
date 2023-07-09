import { useContext, useEffect, useMemo } from 'react';

import { JWT } from '../../../jwt';
import { AuthContext } from '../AuthContext';

export type UseGuardProps = {
  /** true を返すときだけ表示を許可する */
  guardPredicate: (jwt: JWT | null) => boolean;
  /** ガード条件を満たさない場合に実行 */
  onRejected: () => void;
};

export function useGuard({ guardPredicate, onRejected }: UseGuardProps) {
  const authContext = useContext(AuthContext);
  if (authContext === undefined) {
    throw new Error('useGuard must be used within a AuthProvider');
  }

  const { jwt } = authContext;

  const guardPassed = useMemo(() => guardPredicate(jwt), [guardPredicate, jwt]);

  useEffect(() => {
    if (!guardPassed) {
      onRejected();
    }
  }, [guardPassed, onRejected]);

  return { guardPassed };
}
