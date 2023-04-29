import { ButtonProps, Button as _Button } from 'reakit';
import { COLORS } from '../../common/colors';
import styled from '@emotion/styled';

type Variant = 'primary' | 'secondary' | 'error' | 'grey';
type Size = 'small' | 'medium' | 'large';

interface CustomButtonProps {
  variant?: Variant;
  onClick?: () => void;
  size?: Size;
}

const stylingVariants = (variant?: Variant, size?: Size) => {
  let styleString = '';
  switch (variant) {
    case 'primary':
      styleString += `background-color: ${COLORS.primary.main}; color: #FFFFFF;
        &:hover {
          background-color: ${COLORS.primary.light};
        }`;
      break;
    case 'secondary':
      styleString += `background-color: ${COLORS.secondary.main}; color: #FFFFFF;
      &:hover {
        background-color: ${COLORS.secondary.light};
      }`;
      break;
    case 'error':
      styleString += `background-color: ${COLORS.error.main}; color: #FFFFFF;
      &:hover {
        background-color: ${COLORS.error.light};
      }`;
      break;
    case 'grey':
      styleString += `background-color: ${COLORS.grey.main}; color: #000000;
      &:hover {
        background-color: ${COLORS.grey.light};
      }`;
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
  border-radius: 4px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;
