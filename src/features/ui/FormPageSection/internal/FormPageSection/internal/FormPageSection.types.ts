import type { PropsWithChildren, ReactNode } from 'react';

import ExtractStrict from '@/types/ExtractStrict';

import { HeadingProps } from '../../Heading';

export type FormPageSectionProps<
  HeadingType extends HeadingProps<
    ExtractStrict<keyof JSX.IntrinsicElements, 'h1' | 'h2'>
  >['type'],
> = PropsWithChildren<
  HeadingType extends 'h1'
    ? {
        type: HeadingType;
        title: ReactNode;
        descriptionTop?: string;
      }
    : {
        type: HeadingType;
        title: ReactNode;
        descriptionTop?: never;
      }
>;
