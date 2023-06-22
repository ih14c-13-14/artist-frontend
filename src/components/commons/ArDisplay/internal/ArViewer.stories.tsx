import type { Meta, StoryObj } from '@storybook/react';

import ArViewer from './ArViewer.component';
import coverImage from './Image.stories.flower.jpg';
import realityModelPathForAndroid from './Model.stories.flower_2.glb?url';
import realityModelPathForIos from './Model.stories.flower_2.reality?url';

const ArViewerStory: Meta<typeof ArViewer> = {
  component: ArViewer,
  args: {
    coverImage,
    glbModelPath: realityModelPathForAndroid,
    realityModelPath: realityModelPathForIos,
  },
};

export default ArViewerStory;

export const Default: StoryObj<typeof ArViewer> = {};
