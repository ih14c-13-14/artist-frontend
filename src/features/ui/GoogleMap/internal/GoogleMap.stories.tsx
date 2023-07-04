import type { Meta, StoryObj } from '@storybook/react';

import GoogleMap from './GoogleMap.component';

const GoogleMapStory: Meta<typeof GoogleMap> = {
  component: GoogleMap,
  args: {
    q: '34.659096,165.622182',
  },
  parameters: {
    screenshot: {
      // 安定しないため skip
      skip: true,
    },
  },
};

export default GoogleMapStory;

export const Default: StoryObj<typeof GoogleMap> = {};
