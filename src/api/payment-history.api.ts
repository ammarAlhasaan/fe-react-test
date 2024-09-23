import ISalary from "types/salary.type";
import api from "./api";
import IPaymentHistory from "types/payment-history.type";
import {deleteSalary} from "api";

export const getPaymentsHistory = async (): Promise<IPaymentHistory[]> => {
  const response = await api.get('/paymentHistory');
  return response.data;
};
export const createPaymentHistory = async (salary: ISalary): Promise<void> => {
  const {id, ...salaryData} = salary
  await api.post('/paymentHistory', {...salaryData, salaryId: id, createdAt: new Date()});
};
export const paySalaries = async (salaries: ISalary[]): Promise<void> => {
  await Promise.all(
    salaries.map(async (salary) => {
      await createPaymentHistory(salary);
      await deleteSalary(salary.id);
    })
  );
};
