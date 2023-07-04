import type { PropsWithChildren } from 'react';

import { MuiTableSortLabel } from '@/features/ui/library';

import type { TableSortLabelProps } from './TableSortLabel.types';

const TableSortLabel = ({
  children,
  ...rest
}: PropsWithChildren<TableSortLabelProps>) => {
  return <MuiTableSortLabel {...rest}>{children}</MuiTableSortLabel>;
};

export default TableSortLabel;
