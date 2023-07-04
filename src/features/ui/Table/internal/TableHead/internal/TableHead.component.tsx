import type { PropsWithChildren } from 'react';

import { MuiTableHead } from '@/features/ui/library';

import type { TableHeadProps } from './TableHead.types';

const TableHead = ({
  children,
  ...rest
}: PropsWithChildren<TableHeadProps>) => {
  return <MuiTableHead {...rest}>{children}</MuiTableHead>;
};

export default TableHead;
