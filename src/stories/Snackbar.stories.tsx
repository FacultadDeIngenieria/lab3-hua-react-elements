import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../';
import { Alert, LinearProgress, Snackbar } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import React, { useState } from 'react';
import { Simulate } from 'react-dom/test-utils';
import progress = Simulate.progress;
import { COLORS } from '../common/colors';

const meta: Meta<typeof Snackbar> = {
  title: 'Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

function handleClose() {
  console.log('close');
}
const action = () => console.log('action');

export const HUASnackbar: Story = {
  render: () => (
    <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
      <div style={{ backgroundColor: COLORS.error.main, borderRadius: '4px' }}>
        <Alert variant={'filled'} onClose={handleClose} icon={<InfoIcon />} severity="error">
          Toast text
        </Alert>
        <LinearProgress variant="determinate" value={45} color={'error'} />
      </div>
    </Snackbar>
  ),
};
