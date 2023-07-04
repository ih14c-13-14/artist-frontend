import type { Meta, StoryObj } from '@storybook/react';

import ListItemText from './ListItemText.component';

const ListItemTextStory: Meta<typeof ListItemText> = {
  component: ListItemText,
  args: {
    primary: 'primary text',
    secondary: 'secondary text',
  },
  decorators: [
    Story => (
      <ul style={{ height: '1rem' }}>
        <Story />
      </ul>
    ),
  ],
};

export default ListItemTextStory;

export const Default: StoryObj<typeof ListItemText> = {};
