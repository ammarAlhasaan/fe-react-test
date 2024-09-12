import CreateEmployee from "./create";
import EmployeeDetails from "./details";
import EmployeeList, {fetchEmployees} from "./list";
import UpdateEmployee from "./update";
import {RouteObject} from "react-router-dom";


export const employeeRoute: RouteObject = {
  path: "employee",
  Component: EmployeeList,
  loader: fetchEmployees,
  shouldRevalidate: ({nextUrl}) => {
    return nextUrl.pathname === "/dashboard/employee";
  },
  children: [
    {
      path: "create",
      Component: CreateEmployee,
    },
    {
      path: ":id",
      Component: EmployeeDetails,
    },
    {
      path: ":id/update",
      Component: UpdateEmployee,
    }
  ]
}
