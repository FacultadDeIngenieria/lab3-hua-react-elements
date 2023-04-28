import { Box } from './Box';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Box> = {
  title: 'common/Box',
  component: Box,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Example: Story = {
  render: () => <Box />,
};
