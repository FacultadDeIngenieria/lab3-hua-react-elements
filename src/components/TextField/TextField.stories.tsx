import { Meta, StoryObj } from '@storybook/react';
import { TextField } from '@mui/material';

const meta: Meta<typeof TextField> = {
  title: 'TextField',
  component: TextField,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const HUATextFiled: Story = {
  render: () => <TextField label="Default" variant="standard" />,
};
