import CreateEmployee from "./create";
import EmployeeDetails from "./details";
import EmployeeList from "./list";
import UpdateEmployee from "./update";
import {RouteObject} from "react-router-dom";
import {fetchEmployee, fetchEmployees} from "../shared";


export const employeeRoute: RouteObject = {
  path: "employee",
  Component: EmployeeList,
  loader: fetchEmployees,
  shouldRevalidate: ({nextUrl, ...u}) => {
    return nextUrl.pathname === "/dashboard/employee";
  },
  children: [
    {
      path: "create",
      Component: CreateEmployee,
    },
    {
      path: ":id",
      loader: async ({params}) => {
        return await fetchEmployee(params?.id || '')
      },
      shouldRevalidate: (data) => {
        return data.nextUrl.pathname === "/dashboard/employee";
      },
      Component: EmployeeDetails,
    },
    {
      path: ":id/update",
      loader: async ({params}) => {
        return await fetchEmployee(params?.id || '')
      },
      Component: UpdateEmployee,
    }
  ]
}
