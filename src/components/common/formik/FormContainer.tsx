import React from 'react';
import {FieldProps} from 'formik';
import Input, {InputProps} from "../../core/input";


interface InputFieldProps extends Omit<InputProps, 'form'>, FieldProps {
}

const InputField: React.FC<InputFieldProps> = (
  {
    field,
    form,
    ...props
  }) => {

  const {touched, errors} = form;
  const error = touched[field.name] && errors[field.name] ? (errors[field.name] as string) : '';

  return (
    <Input
      {...field}
      {...props}
      error={error} // Set the error message, if any
    />
  );
};
export default InputField;
