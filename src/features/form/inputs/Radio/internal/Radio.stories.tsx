import { Meta, StoryFn } from '@storybook/react';

import Radio from './Radio.component';

const RadioStory: Meta<typeof Radio> = {
  component: Radio,
  args: {
    choiceLabel: '選択肢１',
  },
};

export default RadioStory;

const Template: StoryFn<typeof Radio> = args => <Radio {...args} />;

export const Normal = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  checked: true,
  disabled: true,
};
