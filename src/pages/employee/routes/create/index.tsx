import {useLocation, useParams} from "react-router-dom";
import {EmployeeForm, EmployeeValidationSchema, EmployeeFormValues} from "../../shared";
import {Formik, FormikHelpers} from "formik";
import {DialogRoute} from "components/common";

export default function EmployeeDetails() {

  const location = useLocation();
  const {data} = location.state as { data: EmployeeFormValues } || {};
  const {id} = useParams<"id">();

  return (
    <>
      <DialogRoute>
        <h1>Employee Details {id}</h1>
        <Formik
          initialValues={data}
          validationSchema={EmployeeValidationSchema}
          onSubmit={(
            values: EmployeeFormValues,
            {setSubmitting}: FormikHelpers<EmployeeFormValues>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
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
