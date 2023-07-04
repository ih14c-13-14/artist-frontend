import type { PropsWithChildren } from 'react';

import { MuiGrid } from '@/features/ui/library';

import type { GridProps } from './Grid.types';

const Grid = ({ children, ...rest }: PropsWithChildren<GridProps>) => {
  return <MuiGrid {...rest}>{children}</MuiGrid>;
};

export default Grid;
