import ISalary from "types/salary.type";

export const calculateTotal = (values: Partial<ISalary>) => {
  const basicSalary = Number(values?.basicSalary) || 0;
  const salaryAllowances = Number(values?.salaryAllowances) || 0;
  const additions = Number(values?.additions) || 0;
  const deductions = Number(values?.deductions) || 0;

  return basicSalary + salaryAllowances + additions - deductions;
};
