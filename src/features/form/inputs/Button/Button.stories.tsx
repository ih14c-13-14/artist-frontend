import type { ComponentMeta, StoryFn } from '@/features/storybook';

import Button from './Button.component';

const ButtonStory: ComponentMeta<typeof Button> = {
  component: Button,
};

export default ButtonStory;

const Template: StoryFn<typeof Button> = args => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  label: 'Normal',
  variant: 'contained',
  disabled: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Normal',
  variant: 'outlined',
  disabled: false,
};

export const Text = Template.bind({});
Text.args = {
  label: 'Normal',
  variant: 'text',
  disabled: false,
};
