import type { Meta, StoryObj } from '@storybook/react';

import Box from './Box.component';

const BoxStory: Meta<typeof Box> = {
  component: Box,
  args: {
    children: <div>children</div>,
  },
};

export default BoxStory;

export const Default: StoryObj<typeof Box> = {};
