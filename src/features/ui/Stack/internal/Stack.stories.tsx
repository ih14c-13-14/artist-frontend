import type { Meta, StoryObj } from '@storybook/react';

import Stack from './Stack.component';

const Item = ({ idx }: { idx: number }) => (
  <p
    style={{
      padding: '10px',
      backgroundColor: 'orange',
      flexGrow: idx,
    }}
  >
    {'Item ' + idx}
  </p>
);

const children = (
  <>
    {[...Array(5)].map((_, idx) => (
      <Item key={idx} idx={idx} />
    ))}
  </>
);

const StackStory: Meta<typeof Stack> = {
  component: Stack,
  args: {
    spacing: 2,
    width: '300px',
    height: '300px',
    children,
  },
};

export default StackStory;

export const Vertical: StoryObj<typeof Stack> = {
  args: { height: '1000px' },
};

export const Horizontal: StoryObj<typeof Stack> = {
  args: {
    direction: 'row',
    width: '1000px',
  },
};

export const FlexWrap: StoryObj<typeof Stack> = {
  args: {
    direction: 'row',
    flexWrap: 'wrap',
  },
};
