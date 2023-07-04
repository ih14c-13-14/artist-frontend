import type { PropsWithChildren } from 'react';

import { MuiTablePagination } from '@/features/ui/library';

import type { TablePaginationProps } from './TablePagination.types';

const TablePagination = ({
  children,
  ...rest
}: PropsWithChildren<TablePaginationProps>) => {
  return (
    <MuiTablePagination component="div" {...rest}>
      {children}
    </MuiTablePagination>
  );
};

export default TablePagination;
