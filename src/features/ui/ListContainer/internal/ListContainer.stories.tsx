import type { Meta } from '@storybook/react';

import ListContainer from './ListContainer.component';

const ListContainerStory: Meta<typeof ListContainer> = {
  component: ListContainer,
};

export default ListContainerStory;

export const Default = () => (
  <ListContainer>
    <div style={{ height: '100px', width: 'auto', backgroundColor: 'red' }}>
      children
    </div>
  </ListContainer>
);
