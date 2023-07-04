import type { TypographyVariant } from '@/features/ui/commons/Typography/TypographyVariant.types';
import type { MuiCardHeaderProps } from '@/features/ui/library';

export type CardHeaderProps = MuiCardHeaderProps & {
  titleType?: TypographyVariant;
  subheaderType?: TypographyVariant;
  isTruncated?: boolean;
};

export type UseCardHeaderProps = Pick<
  MuiCardHeaderProps,
  'sx' | 'titleTypographyProps' | 'subheaderTypographyProps'
> & {
  titleType: TypographyVariant;
  subheaderType: TypographyVariant;
  isTruncated: boolean;
};
