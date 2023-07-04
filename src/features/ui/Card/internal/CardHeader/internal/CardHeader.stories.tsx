import type { Meta, StoryObj } from '@storybook/react';

import CardHeader from './CardHeader.component';

const CardHeaderStory: Meta<typeof CardHeader> = {
  component: CardHeader,
  args: {
    title: '草枕',
    subheader:
      '山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。',
  },
  decorators: [
    Story => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
};

export default CardHeaderStory;

export const Default: StoryObj<typeof CardHeader> = {};

export const Truncated: StoryObj<typeof CardHeader> = {
  args: {
    isTruncated: true,
  },
};
