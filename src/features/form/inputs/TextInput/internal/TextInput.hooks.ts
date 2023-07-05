import { useMemo } from 'react';

import type { SxProps, Theme } from '@/features/form/inputs/library';
import LEGEND_DISPLAY_NONE from '@/features/ui/commons/inputSx/LEGEND_DISPLAY_NONE';
import type Length from '@/types/Length';
import mergeSx from '@/utils/mergeSx';

type Props = {
  width: Length;
  sx?: SxProps<Theme>;
};

const useTextInput = ({ width, sx }: Props) => {
  const sxMerged = useMemo(
    () => mergeSx({ width }, LEGEND_DISPLAY_NONE, sx),
    [sx, width]
  );

  return {
    sxMerged,
  } as const;
};

export default useTextInput;
