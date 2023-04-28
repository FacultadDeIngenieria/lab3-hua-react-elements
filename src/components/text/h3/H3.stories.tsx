import { Meta, StoryObj } from '@storybook/react';
import { H3 } from './H3';

const meta: Meta<typeof H3> = {
  title: 'text/H3',
  component: H3,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof H3>;

export const Example: Story = {
  render: () => <H3>Heading 3</H3>,
};
