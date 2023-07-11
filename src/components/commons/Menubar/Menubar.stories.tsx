import { ComponentMeta } from '@/utils/storybook';

import { Menubar } from './Menubar.component';

const MenuStory: ComponentMeta<typeof Menubar> = {
  component: Menubar,
};

export default MenuStory;

export const Bar = () => {
  return <Menubar />;
};
