import type { Meta } from '@storybook/react';

import { TableBody, TableCell, TableHead, TableRow } from '@/features/ui/Table';

import Table from './Table.component';

const TableStory: Meta<typeof Table> = {
  component: Table,
};

export default TableStory;

export const Default = () => (
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
);
