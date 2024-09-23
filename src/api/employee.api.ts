import IEmployee from "types/employee.type";
import api from "./api";


export const getEmployees = async (): Promise<IEmployee[]> => {
  const response = await api.get('/employees');
  return response.data;
};

export const getEmployeeById = async (id: number | string): Promise<IEmployee> => {
  const response = await api.get(`/employees/${id}`);
  return response.data;
};

export const createEmployee = async <T extends IEmployee>(employee: T): Promise<T> => {
  const response = await api.post('/employees', employee);
  return response.data;
};

export const updateEmployee = async <T extends IEmployee>(employee: T): Promise<T> => {
  const response = await api.put(`/employees/${employee.id}`, employee);
  return response.data;
};

export const deleteEmployee = async (id: number | string): Promise<void> => {
  await api.delete(`/employees/${id}`);
};
