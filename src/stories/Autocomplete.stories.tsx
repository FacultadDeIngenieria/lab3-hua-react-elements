import { Meta, StoryObj } from '@storybook/react';
import { Autocomplete, TextField } from '@mui/material';

const meta: Meta<typeof Autocomplete> = {
  title: 'Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

const options = ['Enfermera 1', 'Enfermera 2'];

export const HUAAutocomplete: Story = {
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error'],
    },
    id: {
      control: 'select',
      options: ['controllable-states-demo'],
    },
  },
  args: {
    color: 'primary',
    id: 'controllable-states-demo',
  },
  render: ({ id }) => (
    <Autocomplete
      id={id}
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Enfermera" />}
    />
  ),
};
