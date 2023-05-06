import { styled } from '@mui/material/styles';
import { TextField as MuiTextField } from '@mui/material';
import { FormControl, Input, InputLabel } from '../../';
import { COLORS } from '../../common/colors';

type TextFieldProps = {
  label: string;
  helperText?: string;
  error?: string;
  disable?: string;
  color?: string;
};

export const TextField = styled(MuiTextField)({
  width: '100%',
  margin: '100px 0',
});

interface TextFieldContainerProps {
  children: React.ReactNode;
}

export const TextFieldContainer = ({ children }: TextFieldContainerProps) => {
  return <Container>{children}</Container>;
};

export const TextFieldLabel = ({ label }: TextFieldProps) => {
  return <Label style={{ textAlign: 'start' }}> {label} </Label>;
};

export const TextFieldInput = () => {
  return <InputField />;
};

const Container = styled(FormControl)`
  border-bottom: none;
`;

const Label = styled(InputLabel)``;

const InputField = styled(Input)`
  border-bottom: none;
`;
