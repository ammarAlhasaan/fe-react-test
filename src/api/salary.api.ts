import ISalary from "types/salary.type";
import api from "./api";


export const getSalaries = async (): Promise<ISalary[]> => {
  const response = await api.get('/salaries');
  return response.data;
};

export const getSalaryById = async (id: number | string): Promise<ISalary> => {
  const response = await api.get(`/salaries/${id}`);
  return response.data;
};

export const createSalary = async <T extends ISalary>(salary: T): Promise<T> => {
  const response = await api.post('/salaries', salary);
  return response.data;
};

export const updateSalary = async <T extends ISalary>(salary: T): Promise<T> => {
  const response = await api.put(`/salaries/${salary.id}`, salary);
  return response.data;
};

export const deleteSalary = async (id: number | string): Promise<void> => {
  await api.delete(`/salaries/${id}`);
};
