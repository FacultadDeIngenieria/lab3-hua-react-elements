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

function getColor({ color }: { color: any }) {
  if (color === 'primary') {
    return '#2E3092';
  }
  if (color === 'secondary') {
    return '#50B848';
  }
  if (color === 'error') {
    return '#E03C39';
  }
  return '#D9D9D9';
}

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
    <FormControl disabled={disabled}>
      <InputLabel
        disabled={disabled}
        color={color}
        variant="standard"
        style={{ textAlign: 'start', fontWeight: 'bold' }}
      >
        {title}
      </InputLabel>
      <Input
        color={color}
        placeholder={placeholder}
        style={{ borderBottom: '4px solid', borderRadius: '5px', borderBottomColor: getColor({ color: color }) }}
      />
    </FormControl>
  ),
};
