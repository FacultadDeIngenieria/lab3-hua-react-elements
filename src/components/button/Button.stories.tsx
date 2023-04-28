import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Button> = {
  title: 'common/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const HUAButton: Story = {
  args: {
    variant: 'primary',
    onClick: action('clicked'),
    size: 'medium',
  },
  render: ({ variant, onClick, size }) => (
    <Button variant={variant} onClick={onClick} size={size}>
      Click me!
    </Button>
  ),
};
