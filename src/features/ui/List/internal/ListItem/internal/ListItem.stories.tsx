import type { Meta, StoryObj } from '@storybook/react';

import { ListItemIcon, ListItemText } from '@/features/ui/List';

import ListItem from './ListItem.component';

const ListItemStory: Meta<typeof ListItem> = {
  component: ListItem,
  args: {
    children: (
      <>
        <ListItemIcon>
          <p>icon</p>
        </ListItemIcon>
        <ListItemText primary="primary text" secondary="secondary text" />
      </>
    ),
  },
  decorators: [
    Story => (
      <ul>
        <Story />
      </ul>
    ),
  ],
};

export default ListItemStory;

export const Default: StoryObj<typeof ListItem> = {};
