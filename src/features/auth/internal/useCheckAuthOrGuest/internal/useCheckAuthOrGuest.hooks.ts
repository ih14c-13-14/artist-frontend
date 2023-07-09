import { useEffect } from 'react';

import type { UseCheckAuthOrGuestProps } from './useCheckAuthOrGuest.types';
import { isAuthenticated } from '../../guard';
import { useGuard } from '../../hooks/useGuard';

const useCheckAuthOrGuest = ({ onAuth, onGuest }: UseCheckAuthOrGuestProps) => {
  const { guardPassed: isLoggedin } = useGuard({
    guardPredicate: isAuthenticated,
    onRejected: () => {},
  });

  useEffect(() => {
    if (isLoggedin) {
      onAuth?.();
    } else {
      onGuest?.();
    }
  }, [isLoggedin, onAuth, onGuest]);

  return {
    isLoggedin,
  } as const;
};

export default useCheckAuthOrGuest;
