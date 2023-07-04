import { useMemo } from 'react';

import { FONT_SX } from '@/features/ui/commons/Typography/FONT_SX';
import { generateEllipsisMarkSx } from '@/features/ui/commons/Typography/generateEllipsisMarkSx';
import mergeSx from '@/utils/mergeSx';

import type { TypographyProps } from './Typography.types';

const useTypography = ({ sx, type, isTruncated }: TypographyProps) => {
  const sxMerged = useMemo(
    () =>
      mergeSx(type && FONT_SX[type], generateEllipsisMarkSx(isTruncated), sx),
    [isTruncated, sx, type]
  );

  return {
    sxMerged,
  } as const;
};
export default useTypography;
