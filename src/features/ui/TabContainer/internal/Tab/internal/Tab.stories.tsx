import type { Meta, StoryObj } from '@storybook/react';

import { uuidv4 } from '@/utils/uuid';

import Tab from './Tab.component';
import { a11yProps } from './a11yProps';

const TabStory: Meta<typeof Tab> = {
  component: Tab,
  args: {
    label: 'Tab1',
    ...a11yProps(uuidv4(), 1),
  },
};

export default TabStory;

export const Default: StoryObj<typeof Tab> = {};

export const disabled: StoryObj<typeof Tab> = {
  args: {
    disabled: true,
  },
};
