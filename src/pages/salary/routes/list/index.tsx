import Content from "./content";
import {Button} from "components/core";
import {FaPlus} from 'react-icons/fa';
import {Outlet, useNavigate, useLoaderData} from "react-router-dom";
import {getEmployees} from "api/employee.api";
export const fetchEmployees = async () => {
  const employees = await getEmployees();
  return {employees}
};
export default function EmployeeList() {
  let navigate = useNavigate();
// @ts-ignore
  const {employees} = useLoaderData();

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Employee List</h1>
        <div>
          <Button onClick={() => navigate('create')}>
            <FaPlus/>
            Add Employee
          </Button>
        </div>
      </div>
      <Content employees={employees}/>
      <Outlet/>
    </div>
  );
}
