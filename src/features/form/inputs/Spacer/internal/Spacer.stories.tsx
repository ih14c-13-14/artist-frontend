import type { ComponentMeta, StoryFn } from '@/features/storybook';

import Spacer from './Spacer.component';

const SpacerStory: ComponentMeta<typeof Spacer> = {
  component: Spacer,
  args: {
    size: '8px',
  },
};

export default SpacerStory;

const Template: StoryFn<typeof Spacer> = args => {
  const divStyles = {
    width: '100px',
    height: '100px',
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: args.direction === 'VERTICAL' ? 'column' : 'row',
      }}
    >
      <div
        style={{
          ...divStyles,
          backgroundColor: 'red',
        }}
      />
      <Spacer {...args} />
      <div
        style={{
          ...divStyles,
          backgroundColor: 'blue',
        }}
      />
    </div>
  );
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: 'HORIZONTAL',
};

export const Vertical = Template.bind({});
