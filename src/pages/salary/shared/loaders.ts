import {getEmployeeById, getEmployees} from "api/employee.api";

export const fetchEmployees = async () => {
  const employees = await getEmployees();
  return {employees}
};

export const fetchEmployee = async (id: number | string) => {
  const employee = await getEmployeeById(id);
  return {employee}
}
