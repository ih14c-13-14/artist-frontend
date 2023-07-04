import mergeSx from '@/utils/mergeSx';

import type { ListItemIconProps } from './ListItemIcon.types';

export const useListItemIcon = ({ sx }: Pick<ListItemIconProps, 'sx'>) => {
  const sxMerged = mergeSx(sx);

  return {
    sxMerged,
  } as const;
};
