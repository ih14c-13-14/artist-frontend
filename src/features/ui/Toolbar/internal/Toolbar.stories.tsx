import type { Meta } from '@storybook/react';

import Toolbar from './Toolbar.component';

const ToolbarStory: Meta<typeof Toolbar> = {
  component: Toolbar,
};

export default ToolbarStory;

export const Default = () => (
  <Toolbar
    leftItems={<div>leftItems</div>}
    rightItems={<div>rightItems</div>}
  />
);

export const DisableGutters = () => (
  <Toolbar
    disableGutters
    leftItems={<div>leftItems</div>}
    rightItems={<div>rightItems</div>}
  />
);
