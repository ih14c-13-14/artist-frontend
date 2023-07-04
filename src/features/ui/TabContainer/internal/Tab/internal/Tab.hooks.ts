import type { SxProps, Theme } from '@/features/ui/library';
import mergeSx from '@/utils/mergeSx';

import type { UseTabProps } from './Tab.types';

export const useTab = ({ sx }: UseTabProps) => {
  const sxMerged = mergeSx(sx, {
    '&.MuiTab-root': {
      lineHeight: '16px',
      textTransform: 'none',
      color: '#7A7B7C',
    },
    '&.Mui-selected': {
      color: '#0F89E3',
    },
    '&:hover': {
      backgroundColor: '#F7F8FC',
      color: '#0F89E3',
    },
  } as const satisfies SxProps<Theme>);

  return {
    sxMerged,
  } as const;
};
