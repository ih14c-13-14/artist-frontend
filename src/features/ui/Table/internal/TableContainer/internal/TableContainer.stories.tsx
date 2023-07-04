import type { Meta } from '@storybook/react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@/features/ui/Table';

import TableContainer from './TableContainer.component';

const TableStory: Meta<typeof TableContainer> = {
  component: TableContainer,
};

export default TableStory;

export const Default = () => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>cell</TableCell>
          <TableCell>cell</TableCell>
          <TableCell>cell</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>cell</TableCell>
          <TableCell>cell</TableCell>
          <TableCell>cell</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
