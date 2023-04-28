import { Meta, StoryObj } from '@storybook/react';
import { H6 } from './H6';

const meta: Meta<typeof H6> = {
  title: 'text/H6',
  component: H6,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof H6>;

export const Example: Story = {
  render: () => <H6>Heading 6</H6>,
};
