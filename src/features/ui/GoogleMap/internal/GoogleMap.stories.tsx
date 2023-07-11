import type { Meta, StoryObj } from '@storybook/react';

import GoogleMap from './GoogleMap.component';

const GoogleMapStory: Meta<typeof GoogleMap> = {
  component: GoogleMap,
  args: {
    q: '34.659096,165.622182',
  },
};

export default GoogleMapStory;

export const Default: StoryObj<typeof GoogleMap> = {};
