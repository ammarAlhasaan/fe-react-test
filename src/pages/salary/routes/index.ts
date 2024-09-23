import CreateSalary from "./create";
import SalaryDetails from "./details";
import SalaryList  from "./list";
import UpdateSalary from "./update";
import {RouteObject} from "react-router-dom";
import {fetchSalaries, fetchSalary} from "pages/salary/shared/loaders";


export const salaryRoute: RouteObject = {
  path: "salary",
  Component: SalaryList,
  loader: fetchSalaries,
  shouldRevalidate: ({nextUrl}) => {
    return nextUrl.pathname === "/dashboard/salary";
  },
  children: [
    {
      path: "create",
      Component: CreateSalary,
    },
    {
      path: ":id",
      loader: async ({params}) => {
        return await fetchSalary(params?.id || '')
      },
      Component: SalaryDetails,
    },
    {
      path: ":id/update",
      loader: async ({params}) => {
        return await fetchSalary(params?.id || '')
      },
      Component: UpdateSalary,
    }
  ]
}
