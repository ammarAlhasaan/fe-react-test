import React from 'react';
import {FieldProps} from 'formik';
import Select, {SelectProps} from "components/core/select";


interface SelectFieldProps extends Omit<SelectProps, 'form'>, FieldProps {
}

const SelectField: React.FC<SelectFieldProps> = (
  {
    field,
    form,
    ...props
  }) => {
  const {touched, errors} = form;
  const error = touched[field.name] && errors[field.name] ? (errors[field.name] as string) : '';

  return (
    <Select
      {...field}
      {...props}
      error={error}
    />
  );
};

export default SelectField;
