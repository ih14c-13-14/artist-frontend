import type { PropsWithChildren } from 'react';

import { MuiTable } from '@/features/ui/library';

import type { TableProps } from './Table.types';

const Table = ({ children, ...rest }: PropsWithChildren<TableProps>) => {
  return <MuiTable {...rest}>{children}</MuiTable>;
};

export default Table;
