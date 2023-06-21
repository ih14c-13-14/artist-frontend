import type { Meta, StoryObj } from '@storybook/react';

import coverImage from './Image.stories.flower.jpg';
import realityModelPath from './Model.stories.flower_2.reality?url';
import ArViewer from './ArViewer.component';

const ArViewerStory: Meta<typeof ArViewer> = {
  component: ArViewer,
  args: {
    coverImage,
    realityModelPath,
  },
};

export default ArViewerStory;

export const Default: StoryObj<typeof ArViewer> = {};
