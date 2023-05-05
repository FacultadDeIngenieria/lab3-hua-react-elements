import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const HUAButton: Story = {
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error'],
    },
  },
  args: {
    color: 'primary',
    variant: 'contained',
    size: 'medium',
  },
  render: ({ color, variant, size }) => (
    <Button color={color} size={size} variant={variant}>
      Click me!
    </Button>
  ),
};
