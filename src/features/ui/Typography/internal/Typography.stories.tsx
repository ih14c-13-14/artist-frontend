import type { Meta, StoryObj } from '@storybook/react';

import Typography from './Typography.component';

const TypographyStory: Meta<typeof Typography> = {
  component: Typography,
  args: {
    children: 'Test',
  },
};

export default TypographyStory;

export const Default: StoryObj<typeof Typography> = {};

export const isTruncated = () => (
  <div style={{ display: 'flex', width: '100px' }}>
    <Typography isTruncated>
      TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest
    </Typography>
  </div>
);

export const HEADLINE_1: StoryObj<typeof Typography> = {
  args: {
    type: 'HEADLINE_1',
  },
};

export const HEADLINE_2: StoryObj<typeof Typography> = {
  args: {
    type: 'HEADLINE_2',
  },
};

export const HEADLINE_3: StoryObj<typeof Typography> = {
  args: {
    type: 'HEADLINE_3',
  },
};

export const HEADLINE_4: StoryObj<typeof Typography> = {
  args: {
    type: 'HEADLINE_4',
  },
};

export const BUTTON_LARGE: StoryObj<typeof Typography> = {
  args: {
    type: 'BUTTON_LARGE',
  },
};

export const BUTTON_MEDIUM: StoryObj<typeof Typography> = {
  args: {
    type: 'BUTTON_MEDIUM',
  },
};

export const BUTTON_SMALL: StoryObj<typeof Typography> = {
  args: {
    type: 'BUTTON_SMALL',
  },
};

export const CAPTION: StoryObj<typeof Typography> = {
  args: {
    type: 'CAPTION',
  },
};

export const FORM_TEXT: StoryObj<typeof Typography> = {
  args: {
    type: 'FORM_TEXT',
  },
};

export const FORM_TEXT_BOLD: StoryObj<typeof Typography> = {
  args: {
    type: 'FORM_TEXT_BOLD',
  },
};

export const TEXT_DESCRIPTION: StoryObj<typeof Typography> = {
  args: {
    type: 'TEXT_DESCRIPTION',
  },
};

export const TEXT_TITLE: StoryObj<typeof Typography> = {
  args: {
    type: 'TEXT_TITLE',
  },
};

export const LABEL: StoryObj<typeof Typography> = {
  args: {
    type: 'LABEL',
  },
};
