import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox.component';

const CheckboxStory: Meta<typeof Checkbox> = {
  component: Checkbox,
  args: {
    choiceLabel: '山路を登りながら',
  },
};

export default CheckboxStory;

export const Default: StoryObj<typeof Checkbox> = {};

export const Disabled: StoryObj<typeof Checkbox> = {
  args: {
    disabled: true,
  },
};

export const Checked: StoryObj<typeof Checkbox> = {
  args: {
    checked: true,
  },
};
