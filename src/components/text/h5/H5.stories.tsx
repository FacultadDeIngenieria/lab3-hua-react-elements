import { Meta, StoryObj } from '@storybook/react';
import { H5 } from './H5';

const meta: Meta<typeof H5> = {
  title: 'text/H5',
  component: H5,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof H5>;

export const Example: Story = {
  render: () => <H5>Heading 5</H5>,
};
