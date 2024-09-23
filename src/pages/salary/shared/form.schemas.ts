import * as Yup from "yup";

const SalaryValidationSchema = Yup.object().shape({
  employeeId: Yup.string()
    .required('Employee is required'),
  salaryDate: Yup.date()
    .required('Joining Date is required') // Joining Date is required
    .typeError('Invalid date format'), // Ensure it's a valid date
  additions: Yup.number()
    .required('Basic Salary is required') // Basic Salary is required
    .min(0, 'Basic Salary must be at least 0'), // Cannot be negative
  deductions: Yup.number()
    .required('Salary Allowances are required') // Salary Allowances are required
    .min(0, 'Salary Allowances must be at least 0'), // Cannot be negative
  note: Yup.string().notRequired().nullable(),
});

export {SalaryValidationSchema}
