import mergeSx from '@/utils/mergeSx';

import type { ListItemTextProps } from './ListItemText.types';

export const useListItemText = ({ sx }: Pick<ListItemTextProps, 'sx'>) => {
  const sxMerged = mergeSx(sx);

  return {
    sxMerged,
  } as const;
};
