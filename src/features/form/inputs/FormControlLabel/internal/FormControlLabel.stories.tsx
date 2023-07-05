import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '@/features/form/inputs/Checkbox';

import FormControlLabel from './FormControlLabel.component';

const FormControlLabelStory: Meta<typeof FormControlLabel> = {
  component: FormControlLabel,
};

export default FormControlLabelStory;

export const WithCheckbox: StoryObj<typeof FormControlLabel> = {
  args: {
    control: <Checkbox />,
    label: 'Example Checkbox',
  },
};
