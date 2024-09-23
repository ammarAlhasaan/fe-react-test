import ISalary from "types/salary.type";

export default interface IPaymentHistory extends ISalary {
  id: string;
  salaryId: string;
  createdAt: Date;
}
