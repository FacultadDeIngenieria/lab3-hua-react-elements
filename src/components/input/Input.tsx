import { Input as _Input, InputProps } from 'reakit';
import styled from '@emotion/styled';
import { COLORS } from '../../common/colors';

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

export const Input = styled(_Input)`
  ${(props: CustomInputProps & InputProps) => stylingVariants(props.variant, props.size)}
`;
