import React, {useCallback} from "react";
import {useNavigate} from "react-router-dom";
import {Field, Form, FormikProps} from "formik";
import {Button, Row} from "components/core";
import {SalaryFormValues} from "pages/salary/shared";
import {FormContainer, InputField, SelectField} from "components/common/formik";
import IEmployee from "types/employee.type";
import {calculateTotal} from "pages/salary/shared/utils";

interface SalaryFormProps {
  formikProps: FormikProps<Partial<SalaryFormValues>>;
  employees: IEmployee[];
  readOnly?: boolean;
}

const SalaryForm: React.FC<SalaryFormProps> = ({formikProps, employees, readOnly = false}) => {
  const navigate = useNavigate();
  const {handleSubmit, setFieldValue, values} = formikProps;

  const getEmployeesOption = useCallback(() => {
    const options = employees?.map((employee) => ({value: employee.id, label: employee.name}))
    return options ? [{value: '', label: 'Select an employee'}, ...options] : []
  }, [employees])
  const handleEmployeeChange = (employeeId: string) => {
    const selectedEmployee = employees.find(employee => employee.id === employeeId)
    if (selectedEmployee) {
      setFieldValue('basicSalary', selectedEmployee.basicSalary)
      setFieldValue('salaryAllowances', selectedEmployee.salaryAllowances)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormContainer readOnly={readOnly}>
        <Row className="row">
          <div className="col-12 col-sm-6">
            <Field
              name="employeeId"
              label="EmployeeId"
              options={getEmployeesOption()}
              onChange={(e: any) => {
                handleEmployeeChange(e.target.value)
              }}
              component={SelectField}
            />
          </div>
          <div className="col-12 col-sm-6">
            <Field
              name="salaryDate"
              label="Month"
              type="month"
              component={InputField}
            />
          </div>
          <div className="col-12 col-sm-6">
            <Field
              name="basicSalary"
              label="Basic Salary"
              disabled
              type="number"
              component={InputField}
            />
          </div>
          <div className="col-12 col-sm-6">
            <Field
              name="salaryAllowances"
              label="Salary Allowances"
              type="number"
              disabled
              component={InputField}
            />
          </div>
          <div className="col-12 col-sm-6">
            <Field
              name="additions"
              label="Salary additions"
              placeholder="Enter Salary additions"
              type="number"
              component={InputField}
            />
          </div>
          <div className="col-12 col-sm-6">
            <Field
              name="deductions"
              label="Salary deductions"
              placeholder="Enter Salary deductions"
              type="number"
              component={InputField}
            />
          </div>
          <div className="col-12">
            <Field
              name="note"
              label="Note"
              placeholder="Enter note"
              component={InputField}
            />
          </div>
          <div className="col-12">
            <hr/>
            <h3>Total: {calculateTotal(values)}</h3>
          </div>

        </Row>


        {!readOnly && <Row gap="1rem" justifyContent="end">
          <Button
            type="submit"
          >Submit</Button>
          <Button
            variant="default"
            onClick={() => navigate('/dashboard/salary')
            }>Cancel</Button>
        </Row>}
      </FormContainer>
    </Form>
  );
}
export default SalaryForm
