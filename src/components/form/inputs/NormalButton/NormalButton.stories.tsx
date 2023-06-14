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
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Normal',
  variant: 'outlined',
};

export const Text = Template.bind({});
Text.args = {
  label: 'Normal',
  variant: 'text',
};
