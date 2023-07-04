import type { PropsWithChildren } from 'react';

import { MuiTableBody } from '@/features/ui/library';

import type { TableBodyProps } from './TableBody.types';

const TableBody = ({
  children,
  ...rest
}: PropsWithChildren<TableBodyProps>) => {
  return <MuiTableBody {...rest}>{children}</MuiTableBody>;
};

export default TableBody;
