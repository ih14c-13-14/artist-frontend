import type { Meta, StoryObj } from '@storybook/react';

import coverImage from './Image.stories.flower.jpg';
import realityModelPathForIos from './Model.stories.flower_2.reality?url';
import realityModelPathForAndroid from './Model.stories.flower_2.glb?url';
import ArViewer from './ArViewer.component';

const ArViewerStory: Meta<typeof ArViewer> = {
  component: ArViewer,
  args: {
    coverImage,
  },
};

export default ArViewerStory;

export const ForIos: StoryObj<typeof ArViewer> = {
  args: {
    realityModelPath: realityModelPathForIos,
  },
};

export const ForAndroid: StoryObj<typeof ArViewer> = {
  args: {
    realityModelPath: realityModelPathForAndroid,
  },
};
