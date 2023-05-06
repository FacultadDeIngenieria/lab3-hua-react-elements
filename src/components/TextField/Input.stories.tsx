import { Meta, StoryObj } from '@storybook/react';
import { TextField } from '../../index';
import { TextFieldContainer, TextFieldInput, TextFieldLabel } from './index';

const meta: Meta<typeof TextField> = {
  title: 'TextField',
  component: TextField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const HUAInput: Story = {
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error'],
    },
  },
  args: {
    color: 'primary',
    size: 'medium',
  },
  render: ({ color, size }) => (
    <TextFieldContainer>
      <TextFieldLabel label="Label" />
      <TextFieldInput />
    </TextFieldContainer>
  ),
};
