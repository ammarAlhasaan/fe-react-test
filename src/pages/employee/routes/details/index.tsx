import {useLoaderData} from "react-router-dom";
import {Formik} from "formik";
import {DialogRoute} from "components/common";
import {EmployeeForm, EmployeeFormValues, EmployeeValidationSchema} from "pages/employee/shared";

export default function EmployeeDetails() {
  const {employee} = useLoaderData() as { employee: Partial<EmployeeFormValues> };

  return (
    <>
      <DialogRoute
        title="Employee Details"
      >
        <Formik
          initialValues={employee}
          validationSchema={EmployeeValidationSchema}
          onSubmit={() => {
            return;
          }}
        >
          {(formikProps) => (
            <EmployeeForm formikProps={formikProps} readOnly={true}/>
          )}
        </Formik>
      </DialogRoute>
    </>
  );
}
