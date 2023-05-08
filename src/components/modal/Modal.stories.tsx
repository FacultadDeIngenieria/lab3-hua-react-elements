import { Box, Button } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import { ModalBody, ModalContainer, ModalFooter, ModalHeader } from './Modal';

const meta: Meta<typeof ModalContainer> = {
  title: 'Modal',
  component: ModalContainer,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ModalContainer>;

export const HUAModal: Story = {
  render: () => (
    <ModalContainer>
      <ModalHeader title="test" />
      <ModalBody>
        <Box style={{ height: '200px', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
          Modal Body goes here!
        </Box>
      </ModalBody>
      <ModalFooter>
        <Box style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <Button color={'primary'} size={'small'} variant={'contained'}>
            Aceptar
          </Button>
        </Box>
      </ModalFooter>
    </ModalContainer>
  ),
};
