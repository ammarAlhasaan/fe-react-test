import {Field, Form, FormikProps} from "formik";
import {FormContainer, InputField} from "components/common/formik";
import React from "react";
import {Button, Row} from "components/core";
import {useNavigate} from "react-router-dom";
import {EmployeeFormValues} from "pages/employee/shared/form.types";

interface EmployeeFormProps {
  formikProps: FormikProps<Partial<EmployeeFormValues>>;
  readOnly?: boolean; // Optional readOnly prop
}

const SalaryForm: React.FC<EmployeeFormProps> = ({formikProps, readOnly = false}) => {
  const navigate = useNavigate();
  const {handleSubmit} = formikProps;

  return (
    <Form onSubmit={handleSubmit}>
      <FormContainer readOnly={readOnly}>
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
        {!readOnly && <Row gap="1rem" justifyContent="end">
          <Button
            type="submit"
          >Submit</Button>
          <Button
            variant="default"
            onClick={() => navigate('/dashboard/employee')
            }>Cancel</Button>
        </Row>}
      </FormContainer>
    </Form>
  );
}
export default SalaryForm
