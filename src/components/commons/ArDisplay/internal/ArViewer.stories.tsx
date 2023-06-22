import type { Meta, StoryObj } from '@storybook/react';
import coverImage from './Image.stories.flower.jpg';
import realityModelPathForIos from './Model.stories.flower_2.reality?url';
import realityModelPathForAndroid from './Model.stories.flower_2.glb?url';
import ArViewer from './ArViewer.component';

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
