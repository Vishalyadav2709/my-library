import React from 'react';
import './form.css';

interface FormProps {
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
export const Form = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: FormProps) => {
  const mode = primary ? 'storybook-form--primary' : 'storybook-form--secondary';
  return (
    <button
      type="button"
      className={['storybook-form', `storybook-form--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
