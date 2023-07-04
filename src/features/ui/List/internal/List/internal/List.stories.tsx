import type { Meta } from '@storybook/react';

import { ListItem, ListItemIcon, ListItemText } from '@/features/ui/List';

import List from './List.component';

const ListStory: Meta<typeof List> = {
  component: List,
};

export default ListStory;

export const Default = () => (
  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <ListItem>
      <ListItemIcon>
        <p>icon</p>
      </ListItemIcon>
      <ListItemText primary="primary text" secondary="secondary text" />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <p>icon</p>
      </ListItemIcon>
      <ListItemText primary="primary text" secondary="secondary text" />
    </ListItem>
  </List>
);
