import React from 'react';
import {FieldProps} from 'formik';
import Select, {SelectProps} from "components/core/select";

interface SelectFieldProps extends Omit<SelectProps, 'form'>, FieldProps {
}

const SelectField: React.FC<SelectFieldProps> = (
  {
    field,
    form,
    onChange,
    ...props
  }) => {
  const {touched, errors} = form;
  const error = touched[field.name] && errors[field.name] ? (errors[field.name] as string) : '';
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    field.onChange(e); // Call Formik's onChange to update form state
    onChange?.(e); // Call any additional custom onChange logic
  };
  return (
    <Select
      {...field}
      {...props}
      onChange={handleChange}
      error={error}
    />
  );
};

export default SelectField;
