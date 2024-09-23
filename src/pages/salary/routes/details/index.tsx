import {useLoaderData} from "react-router-dom";
import {SalaryForm, SalaryValidationSchema} from "pages/salary/shared";
import {Formik} from "formik";
import {DialogRoute} from "components/common";
import IEmployee from "types/employee.type";
import ISalary from "types/salary.type";

export default function SalaryDetails() {
  const {salary, employees} = useLoaderData() as { salary: Partial<ISalary>, employees: IEmployee[] };
  return (
    <>
      <DialogRoute
        title="Employee Details"
      >
        <Formik
          initialValues={salary}
          enableReinitialize
          validationSchema={SalaryValidationSchema}
          onSubmit={() => {
            return;
          }}
        >
          {(formikProps) => (
            <SalaryForm formikProps={formikProps} employees={employees} readOnly={true}/>
          )}
        </Formik>
      </DialogRoute>
    </>
  );
}
