import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox.component';

const CheckboxStory: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default CheckboxStory;

export const Default: StoryObj<typeof Checkbox> = {};

export const Disabled: StoryObj<typeof Checkbox> = {
  args: {
    disabled: true,
  },
};
