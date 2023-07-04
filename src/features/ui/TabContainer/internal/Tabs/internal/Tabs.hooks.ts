import type { SxProps, Theme } from '@/features/ui/library';

export const useTabs = () => {
  const tabIndicatorSx = {
    '&.MuiTabs-indicator': {
      height: 3,
      backgroundColor: '#0F89E3',
    },
  } as const satisfies SxProps<Theme>;

  return {
    tabIndicatorSx,
  } as const;
};
