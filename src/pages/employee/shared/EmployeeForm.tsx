import {Field, Form, FormikProps} from "formik";
import {InputField} from "../../../components/common/formik";
import {IEmployee} from "../../../types";
import React from "react";

interface EmployeeFormProps {
  formikProps: FormikProps<IEmployee>; // Props to accept all Formik properties
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({formikProps}) => {
  const {handleSubmit} = formikProps;

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="name"
        label="Name"
        placeholder="John Doe"
        component={InputField}
      />
      <Field
        name="joiningDate"
        label="Joining Date"
        placeholder="Enter Joining Date"
        type="date"
        component={InputField}
      />
      <Field
        name="basicSalary"
        label="Basic Salary"
        placeholder="Enter Basic Salary"
        type="number"
        component={InputField}
      />
      <Field
        name="salaryAllowances"
        label="Salary Allowances"
        placeholder="Enter Salary Allowances"
        type="number"
        component={InputField}
      />
      <button type="submit">Submit</button>
    </Form>
  );
}
export default EmployeeForm
