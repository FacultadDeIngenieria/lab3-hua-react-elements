import React from 'react';
import { Button } from 'reakit/Button';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const HUAButton = ({ primary = false, size = 'medium', backgroundColor, label, onClick }: ButtonProps) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  return (
    <Button className={['button', `button--${size}`, mode].join(' ')} style={{ backgroundColor }} onClick={onClick}>
      {label}
    </Button>
  );
};
