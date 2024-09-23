import React from 'react';
import styles from './Input.module.scss';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = (
  {
    value,
    onChange,
    label,
    error,
    name,
    className,
    ...rest // Spread any additional props
  }) => {
  return (
    <div className={styles.inputWrapper}>
      {label && <label className={styles.label} htmlFor={name}>{label}</label>}
      <input
        value={value}
        onChange={onChange}
        name={name}
        className={`${styles.input} ${className} ${error ? styles.inputError : ''}`}
        {...rest} // Pass any other props down to the input element
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export default Input;
