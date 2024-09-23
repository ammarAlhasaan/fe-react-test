import {useLoaderData, useNavigate} from "react-router-dom";
import {Formik, FormikHelpers} from "formik";
import {DialogRoute} from "components/common";
import {updateSalary} from "api";
import {SalaryForm, SalaryValidationSchema} from "pages/salary/shared";
import IEmployee from "types/employee.type";
import ISalary from "types/salary.type";

export default function SalaryEmployee() {
  const navigate = useNavigate();
  const {salary, employees} = useLoaderData() as { salary: Partial<ISalary>, employees: IEmployee[] };
  return (
    <>
      <DialogRoute title="Add New Salary">
        <Formik
          initialValues={salary}
          enableReinitialize
          validationSchema={SalaryValidationSchema}
          onSubmit={async (
            values: Partial<ISalary>,
            {setSubmitting}: FormikHelpers<Partial<ISalary>>
          ) => {
            try {
              await updateSalary(values as ISalary);
              setSubmitting(false);
            } finally {
              navigate('/dashboard/salary', {replace: true,});
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
