import { Meta, StoryObj } from '@storybook/react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';

const meta: Meta<typeof Dialog> = {
  title: 'Modal',
  component: Dialog,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Dialog>;

function handleClose() {
  console.log('asdasd');
}

export const HuaModal: Story = {
  render: () => (
    <Dialog open={true} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">{'Modal Title'}</DialogTitle>
      <div
        style={{ position: 'absolute', top: '0', right: '0', padding: '10px', display: 'flex', textAlign: 'center' }}
      >
        <CloseIcon style={{ cursor: 'pointer' }}></CloseIcon>
      </div>
      <DialogContent>
        <div style={{ height: '300px', width: '400px' }} />
      </DialogContent>
      <DialogActions>
        <Button color="info" variant="contained" onClick={handleClose} autoFocus>
          Cancelar
        </Button>
        <Button color="primary" variant="contained" onClick={handleClose}>
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  ),
};
