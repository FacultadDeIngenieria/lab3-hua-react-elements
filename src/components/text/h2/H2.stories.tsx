import { Meta, StoryObj } from '@storybook/react';
import { H2 } from './H2';

const meta: Meta<typeof H2> = {
  title: 'text/H2',
  component: H2,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof H2>;

export const Example: Story = {
  render: () => <H2>Heading 2</H2>,
};
