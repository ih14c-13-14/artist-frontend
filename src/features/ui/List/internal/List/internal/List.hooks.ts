import mergeSx from '@/utils/mergeSx';

import type { ListProps } from './List.types';

export const useList = ({ sx }: Pick<ListProps, 'sx'>) => {
  const sxMerged = mergeSx(sx);

  return {
    sxMerged,
  } as const;
};
