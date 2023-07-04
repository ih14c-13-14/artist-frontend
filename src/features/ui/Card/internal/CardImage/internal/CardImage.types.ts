import type { MuiCardMediaProps } from '@/features/ui/library';

export type CardImageProps = Omit<
  MuiCardMediaProps<'img'>,
  'width' | 'height' | 'image'
> &
  Required<Pick<MuiCardMediaProps<'img'>, 'image'>>;
