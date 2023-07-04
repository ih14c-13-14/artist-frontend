import type { Meta } from '@storybook/react';
import { useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@/features/ui/Table';

import TableSortLabel from './TableSortLabel.component';

const ARRAY_LENGTH = 100;

const bodyCells = Array.from({ length: ARRAY_LENGTH }, (_, i) => {
  return {
    id: i,
    name: `name${ARRAY_LENGTH - i}`,
  } as const;
});

const TableSortLabelStory: Meta<typeof TableSortLabel> = {
  component: TableSortLabel,
};

export default TableSortLabelStory;

export const Default = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<keyof (typeof bodyCells)[0]>('id');

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort =
    (property: keyof (typeof bodyCells)[0]) =>
    (_: React.MouseEvent<unknown>) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };

  const sortedBodyCells = bodyCells.sort(
    (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1) * (order === 'asc' ? 1 : -1)
  );

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <TableSortLabel
                active={orderBy === 'id'}
                direction={order}
                onClick={handleSort('id')}
              >
                ID
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'name'}
                direction={order}
                onClick={handleSort('name')}
              >
                Name
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedBodyCells
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        count={bodyCells.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};
