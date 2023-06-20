
import { ComponentMeta, StoryFn } from '@/utils/storybook';
import { MenuButton } from './MenuButton.component';

const MenuButtonStory: ComponentMeta<typeof MenuButton> = {
  component: MenuButton,
};

export default MenuButtonStory;

const Template: StoryFn<typeof MenuButton> = args => (
  <MenuButton {...args} />
);


export const Text = Template.bind({});
Text.args = {
  label: 'メニュー',
  variant: 'text',
};