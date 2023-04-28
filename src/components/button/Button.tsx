import { ButtonProps, Button as _Button } from 'reakit';
import { COLORS } from '../../common/colors';
import styled from '@emotion/styled';

type Variant = 'primary' | 'secondary' | 'error' | 'grey';

interface CustomButtonProps {
  variant?: Variant;
}

const stylingVariants = (variant?: Variant) => {
  console.log(variant);
  switch (variant) {
    case 'primary':
      return `background-color: ${COLORS.primary.main};
        color: #fff;`;
    case 'secondary':
      return `background-color: ${COLORS.secondary.main};
        color: #fff;`;
  }
};

// Finish editing
export const Button = styled(_Button)`
  ${(props: CustomButtonProps & ButtonProps) => stylingVariants(props.variant)}
  font-family: Gotham, sans-serif;
`;
