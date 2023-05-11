import type { Preview } from '@storybook/react';
import { HUATheme } from '../src';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    darkMode: {
      // Set the initial theme
      current: 'dark',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <HUATheme>
        <Story />
      </HUATheme>
    ),
  ],
};

export default preview;
