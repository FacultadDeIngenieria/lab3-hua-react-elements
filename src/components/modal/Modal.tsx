import { Box } from '../box/index';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { COLORS } from '../../common/colors';

type ModalHeaderProps = {
  title: string;
  onClose?: () => void;
};

interface ModalContainerProps {
  children: React.ReactNode;
}

interface ModalFooterProps {
  children: React.ReactNode;
}

interface ModalBodyProps {
  children: React.ReactNode;
}

// Componente reutilizable para el body del modal
export const ModalBody = ({ children }: ModalBodyProps) => {
  return <BodyContainer>{children}</BodyContainer>;
};

// Componente reutilizable para el footer del modal
export const ModalFooter = ({ children }: ModalFooterProps) => {
  return <FooterContainer>{children}</FooterContainer>;
};

export const ModalHeader = ({ title, onClose }: ModalHeaderProps) => {
  return (
    <HeaderContainer>
      <Typography variant="h4">{title}</Typography>
      <CloseIcon fontSize="medium" onClick={onClose} cursor="pointer" />
    </HeaderContainer>
  );
};

export const ModalContainer = ({ children }: ModalContainerProps) => {
  return <Container>{children}</Container>;
};

const HeaderContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 4px solid ${COLORS.primary.main};
  border-radius: 4px;
  background: white;
  position: relative;
  overflow-x: hidden;
`;

const FooterContainer = styled(Box)`
  background: ${COLORS.grey.light};
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
`;

const BodyContainer = styled(Box)`
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
`;
