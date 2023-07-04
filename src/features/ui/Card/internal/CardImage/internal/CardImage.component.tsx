import { type PropsWithChildren } from 'react';

import { MuiCardMedia } from '@/features/ui/library';

import type { CardImageProps } from './CardImage.types';

/**
 * TODO: 画像のサイズ関係について検討する
 * - 縦横比どうするの
 * - はみ出した部分は切り取るのか
 */
const CardImage = ({
  children,
  ...rest
}: PropsWithChildren<CardImageProps>) => {
  return (
    <MuiCardMedia component="img" {...rest}>
      {children}
    </MuiCardMedia>
  );
};

export default CardImage;
