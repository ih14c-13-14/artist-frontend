import { BrowserRouter } from 'react-router-dom';

import { ComponentMeta, StoryFn } from '@/utils/storybook';

import FallbackDisplay from './FallbackDisplay.component';

const FallbackDisplayStory: ComponentMeta<typeof FallbackDisplay> = {
  component: FallbackDisplay,
};

export default FallbackDisplayStory;

const Template: StoryFn<typeof FallbackDisplay> = args => (
  <BrowserRouter>
    <FallbackDisplay {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
