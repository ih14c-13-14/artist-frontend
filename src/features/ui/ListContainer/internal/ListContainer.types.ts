import type { ReactNode } from 'react';

import type Length from '@/types/Length';

export type ListContainerProps = {
  width?: Length;
  height?: Length;
  children: ReactNode;
};
