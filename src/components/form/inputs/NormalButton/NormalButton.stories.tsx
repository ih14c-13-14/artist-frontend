import { ComponentMeta, StoryFn } from '@/utils/storybook';

import { NormalButton } from './NormalButton.component';

const NormalButtonStory: ComponentMeta<typeof NormalButton> = {
  component: NormalButton,
};

export default NormalButtonStory;

const Template: StoryFn<typeof NormalButton> = args => (
  <NormalButton {...args} />
);

export const Contained = Template.bind({});
Contained.args = {
  label: 'Normal',
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
