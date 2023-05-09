import { styled } from '@mui/material/styles';
import { TextField as MuiTextField } from '@mui/material';
import { FormControl, Input, InputLabel } from '../../';
import { COLORS } from '../../common/colors';
import { grey } from '@mui/material/colors';

type TextFieldProps = {
  inputLabel?: string;
  placeholder?: string;
  disable?: boolean;
  color: any;
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

export const TextFieldLabel = ({ inputLabel, color, disable }: TextFieldProps) => {
  return (
    <Label color={color} disabled={disable} variant="standard">
      {inputLabel}
    </Label>
  );
};

export const TextFieldInput = ({ color, disable, placeholder }: TextFieldProps) => {
  return (
    <InputField
      color={color}
      disabled={disable}
      placeholder={placeholder}
      style={{ borderBottomColor: getColor({ color: color }) }}
    />
  );
};

function getColor({ color }: { color: any }) {
  if (color === 'primary') {
    return '#2E3092';
  }
  if (color === 'secondary') {
    return '#50B848';
  }
  if (color === 'error') {
    return '#E03C39';
  }
  return '#D9D9D9';
}

const Container = styled(FormControl)``;

const Label = styled(InputLabel)`
  text-align: start;
  font-weight: bold;
`;

const InputField = styled(Input)`
  border-bottom: 4px solid;
  border-radius: 5px;
`;
