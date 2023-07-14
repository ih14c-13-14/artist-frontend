import { Meta, StoryFn } from '@storybook/react';

import SignOutButton from './SignOutButton.component';

const SignOutButtonStory: Meta<typeof SignOutButton> = {
  component: SignOutButton,
  args: {
    type: 'Activity',
  },
};

export default SignOutButtonStory;

const Template: StoryFn<typeof SignOutButton> = () => <SignOutButton />;

export const Normal = Template.bind({});
