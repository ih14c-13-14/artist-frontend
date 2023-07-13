import { muiTabClasses, type SxProps, type Theme } from '@/features/ui/library';
import mergeSx from '@/utils/mergeSx';

import type { UseTabProps } from './Tab.types';

export const useTab = ({ sx }: UseTabProps) => {
  const sxMerged = mergeSx(sx, {
    [`&.${muiTabClasses.root}`]: {
      lineHeight: '16px',
      textTransform: 'none',
      color: '#D9D9D9',
    },
    [`&.${muiTabClasses.selected}`]: {
      color: '#E60010',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
    },
  } as const satisfies SxProps<Theme>);

  return {
    sxMerged,
  } as const;
};
