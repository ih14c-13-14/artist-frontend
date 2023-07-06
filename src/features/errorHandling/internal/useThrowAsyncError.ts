import { useState, useCallback } from 'react';

const useThrowAsyncError = () => {
  const [_, setError] = useState();

  return useCallback(
    (e: unknown) => {
      setError(() => {
        throw e;
      });
    },
    [setError]
  );
};

export default useThrowAsyncError;
