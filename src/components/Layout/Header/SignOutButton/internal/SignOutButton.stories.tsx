import { Meta, StoryFn } from '@storybook/react';

import SignOutButton from './SignOutButton.component';

const SignOutButtonStory: Meta<typeof SignOutButton> = {
  component: SignOutButton,
  decorators: [
    Story => (
      <div style={{ width: '70px' }}>
        <Story />
      </div>
    ),
  ],
};

export default SignOutButtonStory;

const Template: StoryFn<typeof SignOutButton> = () => <SignOutButton />;

export const Normal = Template.bind({});
