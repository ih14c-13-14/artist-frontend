import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '@/features/ui/Typography';

import CardContent from './CardContent.component';

const CardContentStory: Meta<typeof CardContent> = {
  component: CardContent,
  args: {
    children: (
      <>
        <Typography variant="h1" gutterBottom component="h1">
          草枕
        </Typography>
        <Typography variant="h2" color="text.secondary" component="h2">
          夏目漱石
        </Typography>
        <Typography variant="body1" color="text.secondary" component="p">
          山路を登りながら、こう考えた。
        </Typography>
      </>
    ),
  },
};

export default CardContentStory;

export const Default: StoryObj<typeof CardContent> = {};
