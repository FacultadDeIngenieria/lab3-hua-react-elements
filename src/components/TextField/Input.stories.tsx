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
      options: ['primary', 'secondary', 'error', 'grey'],
    },
    title: {
      control: 'text',
    },
    disabled: {
      control: 'select',
      options: [true, false],
    },
    placeholder: {
      control: 'text',
    },
  },
  args: {
    color: 'primary',
    title: undefined,
    disabled: false,
    placeholder: undefined,
  },
  render: ({ title, color, disabled, placeholder }) => (
    <TextFieldContainer>
      <TextFieldLabel inputLabel={title} color={color} disable={disabled} />
      <TextFieldInput color={color} disable={disabled} placeholder={placeholder} />
    </TextFieldContainer>
  ),
};
