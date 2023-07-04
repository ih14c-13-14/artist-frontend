import type { PropsWithChildren } from 'react';

import { MuiTableRow } from '@/features/ui/library';

import type { TableRowProps } from './TableRow.types';

const TableRow = ({ children, ...rest }: PropsWithChildren<TableRowProps>) => {
  return <MuiTableRow {...rest}>{children}</MuiTableRow>;
};

export default TableRow;
