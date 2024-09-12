import {useLocation} from "react-router-dom";
import {EmployeeForm, EmployeeFormValues, EmployeeValidationSchema} from "../../shared";
import {Formik} from "formik";
import {DialogRoute} from "components/common";

export default function EmployeeDetails() {

  const location = useLocation();
  const {data} = location.state as { data: Partial<EmployeeFormValues> } || {};

  return (
    <>
      <DialogRoute
        title="Employee Details"
      >
        <Formik
          initialValues={data}
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
