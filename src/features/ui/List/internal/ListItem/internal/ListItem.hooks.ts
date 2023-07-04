import mergeSx from '@/utils/mergeSx';

import type { ListItemProps } from './ListItem.types';

export const useListItem = ({ sx }: Pick<ListItemProps, 'sx'>) => {
  const sxMerged = mergeSx(sx);

  return {
    sxMerged,
  } as const;
};
