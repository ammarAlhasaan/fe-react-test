export default interface ISalary {
  id: string;
  employeeId?: string;
  employeeName?: string;
  salaryDate: Date;
  additions?: number;
  deductions?: number;
  note?: string;
  basicSalary?: number;
  salaryAllowances?: number;
  total?: number;
}
