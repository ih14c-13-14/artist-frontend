import type { Meta, StoryObj } from '@storybook/react';

import Identity from './Identity.component';

const IdentityStory: Meta<typeof Identity> = {
  component: Identity,
  args: {},
};

export default IdentityStory;

export const Default: StoryObj<typeof Identity> = {};
