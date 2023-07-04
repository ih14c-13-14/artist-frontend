import type { ReactNode } from 'react';

import { StackProps } from '@/features/ui/Stack';
import type { MuiToolbarProps } from '@/features/ui/library';
import type Length from '@/types/Length';

export type ToolbarProps = Omit<MuiToolbarProps, 'variant'> & {
  height?: Length;
  leftItems?: ReactNode;
  rightItems?: ReactNode;
  spacing?: StackProps['spacing'];
};
