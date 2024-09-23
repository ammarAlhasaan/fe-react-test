import {Formik, FormikHelpers} from "formik";
import {DialogRoute} from "components/common";
import {createSalary} from "api";
import {useLocation, useNavigate} from "react-router-dom";
import {SalaryForm, SalaryFormValues, SalaryValidationSchema} from "pages/salary/shared";
import IEmployee from "types/employee.type";

export default function CreateSalary() {
  const location = useLocation();
  const navigate = useNavigate();
  const {employees} = location.state as { employees: IEmployee[] } || {};

  return (
    <>
      <DialogRoute
        title="Add Salary"
      >
        <Formik
          enableReinitialize
          initialValues={{
            basicSalary: 0,
            salaryAllowances: 0,
            deductions: 0,
            additions: 0
          }}
          validationSchema={SalaryValidationSchema}
          onSubmit={async (
            values: Partial<SalaryFormValues>,
            {setSubmitting}: FormikHelpers<Partial<SalaryFormValues>>
          ) => {
            try {
              const { salaryAllowances, basicSalary, ...restValues } = values;
              await createSalary(restValues as SalaryFormValues);
              setSubmitting(false);
            } finally {
              navigate('/dashboard/salary', {replace: true});
            }
          }}
        >
          {(formikProps) => (
            <SalaryForm formikProps={formikProps} employees={employees}/>
          )}
        </Formik>
      </DialogRoute>
    </>
  );
}
