import { styled } from '@mui/material/styles';
import { Box, TextField as MuiTextField } from '@mui/material';

type TextFieldProps = {
  label: string;
  helperText?: string;
};

export const TextFieldContainer = ({ label, helperText }: TextFieldProps) => {
  return (
    <Box>
      <TextFieldLabel>{label}</TextFieldLabel>
      <TextFieldInput type="text" />
      {helperText && <TextFieldHelperText>{helperText}</TextFieldHelperText>}
    </Box>
  );
};

export const TextField = styled(MuiTextField)({
  width: '100%',
  margin: '8px 0',
});

export const TextFieldLabel = styled('label')({
  display: 'block',
  marginBottom: '4px',
});

export const TextFieldInput = styled('input')({
  width: '100%',
  border: '1px solid #dcdcdc',
  padding: '8px 12px',
  borderRadius: '4px',
  '&:focus': {
    outline: 'none',
    border: '1px solid #1976d2',
  },
});

export const TextFieldHelperText = styled('p')({
  margin: '4px 0 0 0',
  fontSize: '0.75rem',
  color: '#666',
});
