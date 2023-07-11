import { Dehaze } from '@mui/icons-material';

import { ComponentMeta, StoryFn } from '@/utils/storybook';

import { Menubar } from './Menubar.component';

const MenuStory: ComponentMeta<typeof Menubar> = {
  component: Menubar,
};

export default MenuStory;

const Template: StoryFn<typeof Menubar> = args => {
  return <Menubar {...args} />;
};

export const Bar = Template.bind({});
Bar.args = {
  icon: Dehaze,
};
