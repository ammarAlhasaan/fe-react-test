import * as Yup from "yup";

const EmployeeValidationSchema = Yup.object().shape({
  staffId: Yup.string()
    .nullable()
    .notRequired(), // Staff ID is optional
  name: Yup.string()
    .required('Name is required') // Name is required
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters'),
  joiningDate: Yup.date()
    .required('Joining Date is required') // Joining Date is required
    .typeError('Invalid date format'), // Ensure it's a valid date
  basicSalary: Yup.number()
    .required('Basic Salary is required') // Basic Salary is required
    .min(0, 'Basic Salary must be at least 0'), // Cannot be negative
  salaryAllowances: Yup.number()
    .required('Salary Allowances are required') // Salary Allowances are required
    .min(0, 'Salary Allowances must be at least 0'), // Cannot be negative
});

export {EmployeeValidationSchema}
