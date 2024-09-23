import Content from "./content";
import {Button, Row} from "components/core";
import {FaCashRegister, FaPlus} from 'react-icons/fa';
import {Outlet, useLoaderData, useNavigate, useRevalidator} from "react-router-dom";
import ISalary from "types/salary.type";
import IEmployee from "types/employee.type";
import {paySalaries} from "api";
import {useState} from "react";

export default function SalaryList() {
  const navigate = useNavigate();
  const revalidator = useRevalidator();
  const {salaries, employees} = useLoaderData() as { salaries: ISalary[], employees: IEmployee[] };
  const [payLoading, setPayLoading] = useState(false)
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <Row gap="1rem" alignItems="center">
          <h2>Salaries</h2>
        </Row>
        <Row gap="1rem">
          <Button
            isLoading={payLoading}
            kind="dashes"
            onClick={async () => {
              setPayLoading(true)
              try {
                await paySalaries(salaries)
                revalidator.revalidate()
              } catch (e) {
                console.error(e)
                // Handle error
              } finally {
                setPayLoading(false)
              }
            }}><FaPlus/>Pay Salaries</Button>
          <Button onClick={() => navigate('create', {state: {employees}})}>
            <FaCashRegister/>
            Add Salary
          </Button>
        </Row>
      </div>
      <Content salaries={salaries}/>
      <Outlet/>
    </div>
  );
}
