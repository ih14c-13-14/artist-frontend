import { useEffect } from 'react';

import type { UseCheckAuthOrGuestProps } from './useCheckAuthOrGuest.types';
import { useGuard } from '../../AuthContext';
import { isAuthenticated } from '../../guard';

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
