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
  argTypes: {},
  args: {},
  render: () => (
    <>
      <Autocomplete
        id={'combo-box-demo'}
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Enfermera" variant={'standard'} />}
      />
    </>
  ),
};