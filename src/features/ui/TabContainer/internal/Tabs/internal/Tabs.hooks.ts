import {
  muiTabsClasses,
  type SxProps,
  type Theme,
} from '@/features/ui/library';
import mergeSx from '@/utils/mergeSx';

export const useTabs = ({ sx }: { sx?: SxProps<Theme> }) => {
  const tabIndicatorSx = {
    [`&.${muiTabsClasses.indicator}`]: {
      height: 3,
      backgroundColor: '#E60010',
    },
  } as const satisfies SxProps<Theme>;

  const tabsSx = mergeSx(sx, {
    [`&.${muiTabsClasses.root}`]: {
      // TODO: 適用の結果微調整で時間喰いそうなのでいったん、、、
      // height: '40px',
      // minHeight: '40px',
    },
  });

  return {
    tabIndicatorSx,
    tabsSx,
  } as const;
};
