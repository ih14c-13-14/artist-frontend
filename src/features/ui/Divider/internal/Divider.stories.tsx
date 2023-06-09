import type { Meta } from '@storybook/react';

import Divider from './Divider.component';

const DividerStory: Meta<typeof Divider> = {
  component: Divider,
};

export default DividerStory;

export const Default = () => <Divider />;
