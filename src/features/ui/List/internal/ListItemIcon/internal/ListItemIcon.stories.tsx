import type { Meta, StoryObj } from '@storybook/react';

import ListItemIcon from './ListItemIcon.component';

const ListItemIconStory: Meta<typeof ListItemIcon> = {
  component: ListItemIcon,
  args: {
    children: <p>icon</p>,
  },
  decorators: [
    Story => (
      <ul style={{ height: '1em' }}>
        <Story />
      </ul>
    ),
  ],
};

export default ListItemIconStory;

export const Default: StoryObj<typeof ListItemIcon> = {};
