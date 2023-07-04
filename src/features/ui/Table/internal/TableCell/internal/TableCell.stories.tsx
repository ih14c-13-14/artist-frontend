import type { Meta, StoryObj } from '@storybook/react';

import TableCell from './TableCell.component';

const TableCellStory: Meta<typeof TableCell> = {
  component: TableCell,
  args: {
    children: <p>cell</p>,
  },
  decorators: [
    Story => (
      <table>
        <tbody>
          <tr>
            <Story />
          </tr>
        </tbody>
      </table>
    ),
  ],
};

export default TableCellStory;

export const Default: StoryObj<typeof TableCell> = {};
