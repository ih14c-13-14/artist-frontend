import type {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';

import ExtractStrict from '@/types/ExtractStrict';

export type HeadingProps<
  HeadingType extends ExtractStrict<
    keyof JSX.IntrinsicElements,
    'h1' | 'h2' | 'h4' | 'h5'
  >
> = PropsWithChildren<{
  type: HeadingType;
}> &
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
