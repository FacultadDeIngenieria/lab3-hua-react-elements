import { Meta, StoryObj } from '@storybook/react';
import { Searchbox } from './Searchbox';

const meta: Meta<typeof Searchbox> = {
  title: 'common/Searchbox',
  component: Searchbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Searchbox>;

export const HUAButton: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
  },
  render: ({ variant, size }) => <Searchbox placeholder="Buscar..." variant={variant} size={size} />,
};
