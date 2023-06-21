import { ComponentMeta, StoryFn } from '@/utils/storybook';
import { IconWithLabel } from './IconWithLabel.component';
import {
  Approval,
  Home,
  LocationOn,
  ManageSearch,
  CropFree,
} from '@mui/icons-material';

const IconWithLabelStory: ComponentMeta<typeof IconWithLabel> = {
  component: IconWithLabel,
};

export default IconWithLabelStory;

const Template: StoryFn<typeof IconWithLabel> = args => {
  return <IconWithLabel {...args} />;
};

export const Location = Template.bind({});
Location.args = {
  label: 'マップ',
  icon: LocationOn,
};

export const Search = Template.bind({});
Search.args = {
  label: '探す',
  icon: ManageSearch,
};

export const QR = Template.bind({});
QR.args = {
  label: 'QR',
  icon: CropFree,
};

export const Stamp = Template.bind({});
Stamp.args = {
  label: 'スタンプ',
  icon: Approval,
};

export const HomeIcon = Template.bind({});
HomeIcon.args = {
  label: 'ホームに戻る',
  icon: Home,
};
