import { ButtonProps, Button as _Button } from 'reakit';
import { COLORS } from '../../common/colors';
import styled from '@emotion/styled';

type Variant = 'primary' | 'secondary' | 'error' | 'grey';
type Size = 'small' | 'medium' | 'large';

interface CustomButtonProps {
  variant?: Variant;
  onClick: () => void;
  size?: Size;
}

const stylingVariants = (variant?: Variant, size?: Size) => {
  let styleString = '';
  switch (variant) {
    case 'primary':
      styleString += `background-color: ${COLORS.primary.main};`;
      break;
    case 'secondary':
      styleString += `background-color: ${COLORS.secondary.main};`;
      break;
    case 'error':
      styleString += `background-color: ${COLORS.error.main};`;
      break;
    case 'grey':
      styleString += `background-color: ${COLORS.grey.main};`;
      break;
    default:
      break;
  }
  switch (size) {
    case 'small':
      styleString += `
        font-size: 14px;
        padding: 6px 12px;
        `;
      break;
    case 'medium':
      styleString += `
        font-size: 16px;
        padding: 8px 16px;
        `;
      break;
    case 'large':
      styleString += `
        font-size: 18px;
        padding: 10px 20px;
        `;
      break;
    default:
      break;
  }
  return styleString;
};

export const Button = styled(_Button)`
  ${(props: CustomButtonProps & ButtonProps) => stylingVariants(props.variant, props.size)}
  font-family: Gotham, sans-serif;
  color: white;
  border-radius: 4px;
  padding: 10px;
  border: none;
  cursor: pointer;
`;
