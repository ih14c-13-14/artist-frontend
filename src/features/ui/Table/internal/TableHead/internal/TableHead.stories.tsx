import type { Meta, StoryObj } from '@storybook/react';

import { TableCell, TableRow } from '@/features/ui/Table';

import TableHead from './TableHead.component';

const TableHeadStory: Meta<typeof TableHead> = {
  component: TableHead,
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

export default TableHeadStory;

export const Default: StoryObj<typeof TableHead> = {};
