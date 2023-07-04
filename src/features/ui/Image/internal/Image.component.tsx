import { MUIImage } from '@/features/ui/library';

import type { ImageProps } from './Image.types';

const Image = ({ src, alt, fit = 'cover', width, height }: ImageProps) => {
  return (
    <MUIImage
      src={src}
      width={width}
      height={height}
      fit={fit}
      duration={0}
      alt={alt}
    />
  );
};
export default Image;
