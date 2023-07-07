import type { Meta as BaseComponentMeta } from '@storybook/react';
import type { JSXElementConstructor } from 'react';

export type { StoryFn } from '@storybook/react';

export type ComponentMeta<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
> = Omit<BaseComponentMeta<T>, 'title'>;
