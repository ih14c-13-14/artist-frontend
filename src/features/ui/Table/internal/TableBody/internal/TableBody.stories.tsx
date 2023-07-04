import type { Meta, StoryObj } from '@storybook/react';

import { TableCell, TableRow } from '@/features/ui/Table';

import TableBody from './TableBody.component';

const TableBodyStory: Meta<typeof TableBody> = {
  component: TableBody,
  args: {
    children: (
      <TableRow>
        <TableCell>cell</TableCell>
        <TableCell>cell</TableCell>
        <TableCell>cell</TableCell>
      </TableRow>
    ),
  },
  decorators: [
    Story => (
      <table>
        <Story />
      </table>
    ),
  ],
};

export default TableBodyStory;

export const Default: StoryObj<typeof TableBody> = {};
