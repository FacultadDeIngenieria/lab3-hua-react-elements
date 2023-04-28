import { Meta, StoryObj } from '@storybook/react';
import { P } from './P';

const meta: Meta<typeof P> = {
  title: 'text/P',
  component: P,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof P>;

export const Example: Story = {
  render: () => <P>Paragraph</P>,
};
