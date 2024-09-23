import Content from "./content";
import {Button} from "components/core";
import {FaPlus} from 'react-icons/fa';
import {Outlet, useNavigate, useLoaderData} from "react-router-dom";
import IEmployee from "types/employee.type";
export default function EmployeeList() {
  const navigate = useNavigate();
  const {employees} = useLoaderData() as { employees: IEmployee[] };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Employees</h2>
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
