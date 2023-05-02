import {
  useFormStore as _useFormStore,
  Form as _Form,
  FormInput as _FormInput,
  FormGroup as _FormGroup,
  FormLabel as _FormLabel,
  FormError as _FormError,
} from '@ariakit/react';
import styled from '@emotion/styled';

type Variant = 'primary' | 'secondary' | 'error' | 'grey';
type Size = 'small' | 'medium' | 'large';

interface CustomInputProps {
  variant?: Variant;
  size?: Size;
}

const stylingVariants = (variant?: Variant, size?: Size) => {
  let styleString = '';
  switch (variant) {
    case 'primary':
      styleString += ``;
      break;
    case 'secondary':
      styleString += ``;
      break;
    case 'error':
      styleString += ``;
      break;
    case 'grey':
      styleString += ``;
      break;
    default:
      break;
  }
  switch (size) {
    case 'small':
      styleString += ``;
      break;
    case 'medium':
      styleString += ``;
      break;
    case 'large':
      styleString += ``;
      break;
    default:
      break;
  }
  return styleString;
};

export const FormInput = styled(_FormInput)`
  //Style here
`;

export const FormLabel = styled(_FormLabel)`
  //Style Here
`;

export const FormError = styled(_FormError)`
  //Style here
`;

export const FormGroup = _FormGroup;
export const Form = _Form;
export const useFormStore = _useFormStore;
