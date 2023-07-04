import type { Meta, StoryObj } from '@storybook/react';

import Skeleton from './Skeleton.component';

const SkeletonStory: Meta<typeof Skeleton> = {
  component: Skeleton,
  args: {
    width: '100px',
    height: '100px',
  },
};

export default SkeletonStory;

export const Default: StoryObj<typeof Skeleton> = {};
