import React from 'react';
import styles from './Select.module.scss';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[]; // Array of options for the dropdown
}

const Select: React.FC<SelectProps> = (
  {
    value,
    onChange,
    label,
    error,
    name,
    options,
    className,
    ...rest // Spread any additional props
  }) => {
  return (
    <div className={styles.selectWrapper}>
      {label && <label className={styles.label} htmlFor={name}>{label}</label>}
      <select
        value={value}
        onChange={onChange}
        name={name}
        className={`${styles.select} ${className} ${error ? styles.selectError : ''}`}
        {...rest} // Pass any other props down to the select element
      >
        {/* Render options dynamically */}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export default Select;
