import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card.component';

const CardStory: Meta<typeof Card> = {
  component: Card,
  args: {
    children: <div>children</div>,
  },
};

export default CardStory;

export const Default: StoryObj<typeof Card> = {};
