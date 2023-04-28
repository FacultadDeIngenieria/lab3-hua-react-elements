import { Meta, StoryObj } from '@storybook/react';
import { H4 } from './H4';

const meta: Meta<typeof H4> = {
  title: 'text/H4',
  component: H4,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof H4>;

export const Example: Story = {
  render: () => <H4>Heading 4</H4>,
};
