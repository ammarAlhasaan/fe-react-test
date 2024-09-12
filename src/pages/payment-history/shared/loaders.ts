import {getPaymentsHistory, getSalaries, getSalaryById} from "api/salary.api";
import {getEmployees} from "api/employee.api";
import {calculateTotal} from "pages/salary/shared/utils";

export const fetchSalaries = async () => {
  const employees = await getEmployees();
  const salariesData = await getSalaries();
  const salaries = salariesData.map((salary) => {
    const employee = employees.find((emp) => emp.id === salary.employeeId);

    const salaryItem = {
      ...salary,
      employeeName: employee ? employee.name : '',
      basicSalary: Number(employee?.basicSalary),
      salaryAllowances: Number(employee?.salaryAllowances),
      total: calculateTotal(salary)
    }
    return {
      ...salaryItem,
      total: calculateTotal(salaryItem)
    }
  })
  return {salaries, employees}
};

export const fetchSalary = async (id: number | string) => {
  const employees = await getEmployees();

  const salary = await getSalaryById(id);
  const employee = employees.find((emp) => emp.id === salary.employeeId);
  return {
    employees,
    salary: {
      ...salary,
      employeeName: employee ? employee.name : '',
      basicSalary: Number(employee?.basicSalary),
      salaryAllowances: Number(employee?.salaryAllowances),
      total: calculateTotal(salary)
    }
  }
}


export const fetchPaymentHistory = async () => {
  const paymentHistory = await getPaymentsHistory();
  return {
    paymentHistory
  }
}
