import { Combobox, ComboboxProps, useComboboxStore } from '@ariakit/react';
import { Search } from 'react-feather';
import { COLORS } from '../../common/colors';
import { Box } from '../box';
import { CSSProperties } from 'react';

interface IconProps {
  iconStyle?: CSSProperties;
  onClickIcon?: () => void;
}

interface WrapperProps {
  wrapperStyle?: CSSProperties;
}

type Variant = 'primary' | 'secondary' | 'error';
type Size = 'small' | 'medium' | 'large';

interface SearchboxProps {
  variant?: Variant;
  size?: Size;
}

// Make in utils
const stylingVariants = (variant?: Variant, size?: Size): Record<string, string> => {
  let color = {};
  let _size = {};
  switch (variant) {
    case 'primary':
      color = { borderColor: COLORS.primary.main };
      break;
    case 'secondary':
      color = { borderColor: COLORS.secondary.main };
      break;
    case 'error':
      color = { borderColor: COLORS.error.main };
      break;
    default:
      break;
  }
  switch (size) {
    case 'small':
      _size = {
        fontSize: '14px',
        padding: '6px 12px',
      };
      break;
    case 'medium':
      _size = {
        fontSize: '16px',
        padding: '8px 16px',
      };
      break;
    case 'large':
      _size = {
        fontSize: '18px',
        padding: '10px 20px',
      };
      break;
    default:
      break;
  }
  return { ...color, ..._size };
};

export const Searchbox = ({
  variant = 'primary',
  size = 'medium',
  ...props
}: SearchboxProps & Omit<ComboboxProps, 'store' | 'size'> & IconProps & WrapperProps) => {
  const combobox = useComboboxStore({ gutter: 4 });
  return (
    <Box
      style={{
        position: 'relative',
        display: 'inline-block',
        ...props.wrapperStyle,
      }}
    >
      <Combobox
        store={combobox}
        {...props}
        style={{
          border: '0px',
          borderRadius: '4px',
          borderBottomWidth: '4px',
          borderBottomColor: COLORS[variant].main,
          borderBottomStyle: 'solid',
          ...stylingVariants(variant, size),
          ...props.style,
        }}
      />
      <Search
        style={{
          position: 'absolute',
          right: '2px',
          width: 'auto',
          top: 0,
          bottom: 0,
          margin: 'auto',
          ...props.iconStyle,
        }}
        color={COLORS[variant].main}
        onClick={props.onClickIcon}
        size={stylingVariants(variant, size).fontSize}
      />
    </Box>
  );
};
