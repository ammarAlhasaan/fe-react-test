import ISalary from "types/salary.type";
import api from "./api";
import IPaymentHistory from "types/payment-history.type";


// Get all salaries
export const getSalaries = async (): Promise<ISalary[]> => {
  const response = await api.get('/salaries');
  return response.data;
};

// Get a single salary by ID
export const getSalaryById = async (id: number | string): Promise<ISalary> => {
  const response = await api.get(`/salaries/${id}`);
  return response.data;
};

// Create a new salary
export const createSalary = async <T extends ISalary>(salary: T): Promise<T> => {
  const response = await api.post('/salaries', salary);
  return response.data;
};

// Update an existing salary
export const updateSalary = async <T extends ISalary>(salary: T): Promise<T> => {
  const response = await api.put(`/salaries/${salary.id}`, salary);
  return response.data;
};

// Delete an salary
export const deleteSalary = async (id: number | string): Promise<void> => {
  await api.delete(`/salaries/${id}`);
};

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
