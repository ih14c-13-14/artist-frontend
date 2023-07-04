import type { Meta } from '@storybook/react';

import { Icon } from '@/features/ui/Icon';

import CardActions from './CardActions.component';

const CardActionsStory: Meta<typeof CardActions> = {
  component: CardActions,
};

export default CardActionsStory;

export const Default = () => (
  <CardActions>
    <Icon shape="Square" />
    <Icon shape="StopCircle" />
    <Icon shape="ChevronLeft" fill="currentColor" />
  </CardActions>
);
