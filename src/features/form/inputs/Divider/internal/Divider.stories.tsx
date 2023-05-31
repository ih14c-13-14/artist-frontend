import type { ComponentMeta, StoryFn } from '@/features/storybook';

import Divider from './Divider.component';

const DividerStory: ComponentMeta<typeof Divider> = {
  component: Divider,
  args: {
    orientation: 'HORIZONTAL',
  },
};

export default DividerStory;

const Template: StoryFn<typeof Divider> = args => <Divider {...args} />;

export const Horizontal = Template.bind({});

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: 'VERTICAL',
};
