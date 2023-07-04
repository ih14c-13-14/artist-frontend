import type { PropsWithChildren } from 'react';

import { MuiTableCell } from '@/features/ui/library';

import type { TableCellProps } from './TableCell.types';

const TableCell = ({
  children,
  ...rest
}: PropsWithChildren<TableCellProps>) => {
  return <MuiTableCell {...rest}>{children}</MuiTableCell>;
};

export default TableCell;
