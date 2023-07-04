import { useMemo } from 'react';

import { FONT_SX } from '@/features/ui/commons/Typography/FONT_SX';
import { generateEllipsisMarkSx } from '@/features/ui/commons/Typography/generateEllipsisMarkSx';
import mergeSx from '@/utils/mergeSx';

import type { UseCardHeaderProps } from './CardHeader.types';

export const useCardHeader = ({
  sx,
  titleType,
  subheaderType,
  isTruncated,
  titleTypographyProps,
  subheaderTypographyProps,
}: UseCardHeaderProps) => {
  const cardHeaderSxMerged = useMemo(
    () =>
      mergeSx(
        {
          width: '100%',
          '& .MuiCardHeader-content': {
            width: '100%',
          },
        },
        sx
      ),
    [sx]
  );

  const titleSxMerged = useMemo(
    () =>
      mergeSx(
        FONT_SX[titleType],
        generateEllipsisMarkSx(isTruncated),
        titleTypographyProps
      ),
    [isTruncated, titleTypographyProps, titleType]
  );
  const subheaderSxMerged = useMemo(
    () =>
      mergeSx(
        FONT_SX[subheaderType],
        generateEllipsisMarkSx(isTruncated),
        subheaderTypographyProps
      ),
    [isTruncated, subheaderTypographyProps, subheaderType]
  );

  return {
    cardHeaderSxMerged,
    titleSxMerged,
    subheaderSxMerged,
  } as const;
};
