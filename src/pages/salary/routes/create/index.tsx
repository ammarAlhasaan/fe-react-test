import {EmployeeForm, EmployeeFormValues, EmployeeValidationSchema} from "../../shared";
import {Formik, FormikHelpers} from "formik";
import {DialogRoute} from "components/common";
import {createEmployee} from "api/employee.api";
import {useNavigate} from "react-router-dom";

export default function CreateEmployee() {
  const navigate = useNavigate();

  return (
    <>
      <DialogRoute
        title="Add New Employee"
      >
        <Formik
          initialValues={{}}
          validationSchema={EmployeeValidationSchema}
          onSubmit={async (
            values: Partial<EmployeeFormValues>,
            {setSubmitting}: FormikHelpers<Partial<EmployeeFormValues>>
          ) => {
            try {
              const randomStaffId = Math.floor(1000 + Math.random() * 9000).toString(); // Generates a random 4-digit number as a string
              await createEmployee({
                ...values,
                staffId: randomStaffId,
              } as EmployeeFormValues);
              setSubmitting(false);
            } finally {
              navigate('/dashboard/employee', {replace: true});
            }
          }}
        >
          {(formikProps) => (
            <EmployeeForm formikProps={formikProps}/>
          )}
        </Formik>
      </DialogRoute>
    </>
  );
}
