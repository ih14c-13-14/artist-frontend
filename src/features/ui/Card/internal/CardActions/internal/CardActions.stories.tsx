import { Button } from '@mui/material';
import type { Meta } from '@storybook/react';

import CardActions from './CardActions.component';

const CardActionsStory: Meta<typeof CardActions> = {
  component: CardActions,
};

export default CardActionsStory;

export const Default = () => (
  <CardActions>
    <Button>add</Button>
    <Button>edit</Button>
    <Button>delete</Button>
  </CardActions>
);
