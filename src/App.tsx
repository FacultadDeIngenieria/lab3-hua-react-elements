import { ModalBody, ModalContainer, ModalFooter, ModalHeader } from './components/modal/Modal';
import React from 'react';
import { Box } from '@mui/material';
import { width } from '@mui/system';

function App() {
  return (
    <Box style={{ width: '50%' }}>
      <ModalContainer>
        <ModalHeader title="test" onClose={() => console.log('hola')} />
        <ModalBody>
          <Box style={{ height: '200px' }}>jandnmas</Box>
        </ModalBody>
        <ModalFooter>
          <Box style={{ height: '50px' }}>jandnmas</Box>
        </ModalFooter>
      </ModalContainer>
    </Box>
  );
}

export default App;
