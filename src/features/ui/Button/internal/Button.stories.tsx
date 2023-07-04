import { ComponentMeta, StoryFn } from '@/utils/storybook';

import { Button } from './Button.component';

const ButtonStory: ComponentMeta<typeof Button> = {
  component: Button,
};

export default ButtonStory;

const Template: StoryFn<typeof Button> = args => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  label: 'Button',
  disabled: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Button',
  variant: 'outlined',
  disabled: false,
};

export const Text = Template.bind({});
Text.args = {
  label: 'Button',
  variant: 'text',
  disabled: false,
};
