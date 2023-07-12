import type { Meta, StoryObj } from '@storybook/react';

import Image from './Image.component';
import imageFile from './Image.stories.flower.jpg';

const ImageStory: Meta<typeof Image> = {
  component: Image,
  args: {
    src: imageFile,
    width: 200,
  },
};

export default ImageStory;

export const Default: StoryObj<typeof Image> = {};
