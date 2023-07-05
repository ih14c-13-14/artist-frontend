import type { Meta, StoryObj } from '@storybook/react';

import TextInput from './TextInput.component';

const TextInputStory: Meta<typeof TextInput> = {
  component: TextInput,
  args: {
    placeholder: 'Placeholder',
  },
};

export default TextInputStory;

export const Default: StoryObj<typeof TextInput> = {};

export const Disabled: StoryObj<typeof TextInput> = {
  args: {
    disabled: true,
  },
};

export const Medium: StoryObj<typeof TextInput> = {
  args: {
    size: 'medium',
  },
};

export const LargeWidth: StoryObj<typeof TextInput> = {
  args: {
    width: '500px',
  },
};
