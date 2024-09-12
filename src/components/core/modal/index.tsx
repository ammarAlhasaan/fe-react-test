import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'default' | 'info' | 'primary' | 'warning' | 'error' | 'success' | any;
  kind?: 'filled' | 'outline' | 'dashes' | 'text';
  disabled?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
                                         children,
                                         onClick,
                                         variant = 'primary',
                                         kind = 'filled',
                                         disabled = false,
                                         isLoading = false,
                                       }) => {
  const buttonClass = `${styles.button} ${styles[`${kind}`]} ${styles[`${variant}`]}`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || isLoading}
      data-loading={isLoading}
    >
      {children}
    </button>
  );
};

export default Button;
