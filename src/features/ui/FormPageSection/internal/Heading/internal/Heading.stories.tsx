import { Meta, StoryFn } from '@storybook/react';

import Heading from './Heading.component';

const HeadingStory: Meta<typeof Heading> = {
  component: Heading,
  args: {
    children: 'children',
  },
};

export default HeadingStory;

const Template: StoryFn<typeof Heading> = args => <Heading {...args} />;

export const TypeH1 = Template.bind({});
TypeH1.args = {
  type: 'h1',
};

export const TypeH2 = Template.bind({});
TypeH2.args = {
  type: 'h2',
};
