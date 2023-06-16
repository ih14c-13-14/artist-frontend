import { ComponentMeta, StoryFn } from '@storybook/react';
import { TextField } from './TextField.component';

const TextFieldStory: ComponentMeta<typeof TextField> = {
  component: TextField,
};

export default TextFieldStory;

const Template: StoryFn<typeof TextField> = args => {
  return <TextField {...args} />;
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Outlined',
  variant: 'outlined',
  disabled: false,
};

export const Filled = Template.bind({});
Filled.args = {
  label: 'Filled',
  variant: 'filled',
  disabled: false,
};

export const Standard = Template.bind({});
Standard.args = {
  label: 'Standard',
  variant: 'standard',
  disabled: false,
};
