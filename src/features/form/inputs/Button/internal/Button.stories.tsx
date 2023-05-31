import type { ComponentMeta, StoryFn } from '@/features/storybook';

import Button from './Button.component';

const ButtonStory: ComponentMeta<typeof Button> = {
  component: Button,
};

export default ButtonStory;

const Template: StoryFn<typeof Button> = args => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'children',
  disabled: false,
};
