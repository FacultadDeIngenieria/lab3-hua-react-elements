import { Meta, StoryObj } from '@storybook/react';
import { FormControl, Input, InputLabel, TextField } from '@mui/material';

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
    <FormControl>
      <InputLabel htmlFor="name" color={color}>
        Name
      </InputLabel>
      <Input name="name" color={color} size={size} />
    </FormControl>
  ),
};
