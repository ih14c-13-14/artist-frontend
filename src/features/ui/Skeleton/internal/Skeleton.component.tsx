import type { PropsWithChildren } from 'react';

import type { MuiSkeletonProps } from '@/features/ui/library';
import { MuiSkeleton } from '@/features/ui/library';

const Skeleton = ({
  children,
  ...rest
}: PropsWithChildren<MuiSkeletonProps>) => {
  return <MuiSkeleton {...rest}>{children}</MuiSkeleton>;
};

export default Skeleton;
