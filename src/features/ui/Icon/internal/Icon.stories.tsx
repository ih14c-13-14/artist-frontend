import { Meta, StoryFn } from '@storybook/react';

import Icon from './Icon.component';

const IconStory: Meta<typeof Icon> = {
  component: Icon,
  args: {
    type: 'Activity',
  },
};

export default IconStory;

const Template: StoryFn<typeof Icon> = args => <Icon {...args} />;

export const Normal = Template.bind({});
