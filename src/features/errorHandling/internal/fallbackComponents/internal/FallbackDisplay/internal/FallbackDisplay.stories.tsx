import { BrowserRouter } from 'react-router-dom';

import { ComponentMeta, StoryFn } from '@/utils/storybook';

import FallbackDisplay from './FallbackDisplay.component';
import { FallbackDisplayProps } from './FallbackDisplay.types';

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

export const WithError = () => {
  let error: Error;
  try {
    throw new Error('ErrorBoundary Error');
  } catch (e) {
    error = e as Error;
  }

  const props = {
    title: error instanceof Error ? error.name : '',
    subtitle: error instanceof Error ? error.message : '',
    contentRows: error instanceof Error ? [error.stack ?? ''] : [],
  } satisfies FallbackDisplayProps;

  return (
    <BrowserRouter>
      <FallbackDisplay {...props} />
    </BrowserRouter>
  );
};
