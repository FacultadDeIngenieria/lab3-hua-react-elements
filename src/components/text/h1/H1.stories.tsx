import { Meta, StoryObj } from '@storybook/react';
import { H1 } from './H1';

const meta: Meta<typeof H1> = {
  title: 'text/H1',
  component: H1,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof H1>;

export const Example: Story = {
  render: () => <H1>Heading 1</H1>,
};
