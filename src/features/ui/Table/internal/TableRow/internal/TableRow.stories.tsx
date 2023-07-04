import type { Meta, StoryObj } from '@storybook/react';

import { TableCell } from '@/features/ui/Table';

import TableRow from './TableRow.component';

const TableRowStory: Meta<typeof TableRow> = {
  component: TableRow,
  args: {
    children: <TableCell>cell</TableCell>,
  },
  decorators: [
    Story => (
      <table>
        <tbody>
          <Story />
        </tbody>
      </table>
    ),
  ],
};

export default TableRowStory;

export const Default: StoryObj<typeof TableRow> = {};
