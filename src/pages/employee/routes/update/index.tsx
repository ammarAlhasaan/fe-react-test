import {Formik, FormikHelpers} from "formik";
import {DialogRoute} from "components/common";
import {updateEmployee} from "api/employee.api";
import {useLocation, useNavigate} from "react-router-dom";
import {EmployeeForm, EmployeeFormValues, EmployeeValidationSchema} from "pages/employee/shared";

export default function UpdateEmployee() {
  const location = useLocation();
  const navigate = useNavigate();
  const {data} = location.state as { data: Partial<EmployeeFormValues> } || {};

  return (
    <>
      <DialogRoute
        title="Add New Employee"
      >
        <Formik
          initialValues={data}
          validationSchema={EmployeeValidationSchema}
          onSubmit={async (
            values: Partial<EmployeeFormValues>,
            {setSubmitting}: FormikHelpers<Partial<EmployeeFormValues>>
          ) => {
            try {
              await updateEmployee(values as EmployeeFormValues);
              setSubmitting(false);
            } catch (err) {
              console.log('error')
            } finally {
              // navigate('.');
              navigate('/dashboard/employee', {replace: true,});
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
