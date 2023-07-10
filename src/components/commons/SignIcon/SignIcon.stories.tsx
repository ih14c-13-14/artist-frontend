import { Login, Logout } from '@mui/icons-material/';

import { ComponentMeta, StoryFn } from '@/utils/storybook';

import { SignIcon } from './SignIcon.component';

const SignStory: ComponentMeta<typeof SignIcon> = {
  component: SignIcon,
};

export default SignStory;

const Template: StoryFn<typeof SignIcon> = args => {
  return <SignIcon {...args} />;
};

export const NotSigned = Template.bind({});
NotSigned.args = {
  icon: Logout,
};

export const Signed = Template.bind({});
Signed.args = {
  icon: Login,
};
