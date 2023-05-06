import { Meta, StoryObj } from '@storybook/react';
import { AppBar } from '../';

const meta: Meta<typeof AppBar> = {
  title: 'AppBar',
  component: AppBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppBar>;

export const HUAAppBar: Story = {
  render: () => <AppBar />,
};
