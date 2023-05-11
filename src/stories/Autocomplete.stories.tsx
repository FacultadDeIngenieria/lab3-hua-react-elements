import { Meta, StoryObj } from '@storybook/react';
import { Autocomplete, InputBase, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
  },
  args: {
    color: 'primary',
    id: 'controllable-states-demo',
  },
  render: ({ color }) => (
    <>
      <Autocomplete
        id={'combo-box-demo'}
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Enfermera" variant={'standard'} />}
        color={color}
      />
    </>
  ),
};
