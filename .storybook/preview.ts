import type { Preview } from '@storybook/react';
import 'ress/ress.css';
import '@google/model-viewer'; // eslint-disable-line @typescript-eslint/no-restricted-imports

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
