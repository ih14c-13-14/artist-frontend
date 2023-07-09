import { useEffect } from 'react';

import type { UseCheckAuthOrGuestProps } from './useCheckAuthOrGuest.types';
import { isAuthenticated } from '../../guard';
import { useGuard } from '../../hooks/useGuard';

const useCheckAuthOrGuest = ({ onAuth, onGuest }: UseCheckAuthOrGuestProps) => {
  const { guardPassed: isLoggedIn } = useGuard({
    guardPredicate: isAuthenticated,
    onRejected: () => {},
  });

  useEffect(() => {
    if (isLoggedIn) {
      onAuth?.();
    } else {
      onGuest?.();
    }
  }, [isLoggedIn, onAuth, onGuest]);

  return {
    isLoggedIn,
  } as const;
};

export default useCheckAuthOrGuest;
