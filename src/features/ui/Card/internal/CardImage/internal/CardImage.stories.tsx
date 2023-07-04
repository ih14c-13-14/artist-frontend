import type { Meta, StoryObj } from '@storybook/react';

import CardImage from './CardImage.component';
import imageFile from './CardImage.stories.sample.jpg';

const CardImageStory: Meta<typeof CardImage> = {
  component: CardImage,
  args: {
    image: imageFile,
    title: 'Title',
  },
};

export default CardImageStory;

export const Default: StoryObj<typeof CardImage> = {
  args: {
    sx: {
      height: '200px',
    },
  },
};
