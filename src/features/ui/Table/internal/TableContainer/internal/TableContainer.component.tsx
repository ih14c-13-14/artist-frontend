import type { PropsWithChildren } from 'react';

import { MuiTableContainer } from '@/features/ui/library';

import type { TableContainerProps } from './TableContainer.types';

const TableContainer = ({
  children,
  ...rest
}: PropsWithChildren<TableContainerProps>) => {
  return <MuiTableContainer {...rest}>{children}</MuiTableContainer>;
};

export default TableContainer;
