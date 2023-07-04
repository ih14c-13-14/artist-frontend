import type { ElementType } from 'react';

import type { TypographyVariant } from '@/features/ui/commons/Typography/TypographyVariant.types';
import { type MuiTypographyProps } from '@/features/ui/library/Typography';

export type TypographyProps = MuiTypographyProps & {
  type?: TypographyVariant;
  isTruncated?: boolean;
  component?: ElementType;
};
