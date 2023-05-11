import { Meta, StoryObj } from '@storybook/react';
import { Input, InputLabel, TextField } from '../index';
import { FormControl } from '@mui/material';

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
    title: '',
    disabled: false,
    placeholder: '',
  },
  render: ({ title, color, disabled, placeholder }) => (
    <FormControl>
      <InputLabel disabled={disabled} color={color}>
        {title}
      </InputLabel>
      <Input color={color} placeholder={placeholder} disabled={disabled} />
    </FormControl>
  ),
};
