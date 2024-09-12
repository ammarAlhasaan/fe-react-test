import Content from "./content";
import {Button} from "../../../components/core";
import {FaPlus} from 'react-icons/fa';
import {Outlet} from "react-router-dom";

export default function EmployeeList() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Employee List</h1>
        <div>
          <Button onClick={() => console.log('Clicked!')}>
            <FaPlus />
            Add Employee
          </Button>
        </div>
      </div>
      <Content/>
      <Outlet />
    </div>
  );
}
