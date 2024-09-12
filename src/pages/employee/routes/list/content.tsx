import {Button, List, Modal} from "../../../components/core";
import {useEffect, useState} from "react";
import { MdClose, MdEdit } from "react-icons/md";


import {employees} from "./data";
import {useNavigate, useParams} from "react-router-dom";

const headers = [
  { key: 'staffId', label: 'Staff ID' },
  { key: 'name', label: 'Name' },
  { key: 'joiningDate', label: 'Joining Date' },
  { key: 'basicSalary', label: 'Basic Salary' },
  { key: 'salaryAllowances', label: 'Salary Allowances' },
  { key: 'action', label: '' }, // Optional action column
];

export default function Content() {

  let navigate = useNavigate();


  const [data, setData] = useState<any[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedEmployee, setSelectedEmployee] = useState<any>(undefined)
  const formattedData = (employees: any[]): any[] => {
    return employees.map(employee => {
      return {
        ...employee, action: {
          renderCol: () => <>
            <Button
              kind="text"
              onClick={() => {
                // setIsOpen(true);
                navigate(`${employee.staffId}`, { state: { data: employee } })
                setSelectedEmployee(employee);
              }}>
              <MdEdit/>
            </Button>
            <Button
              kind="text"
              variant="error"
              onClick={() => {
                setIsOpen(true);
                setSelectedEmployee(employee);
              }}>
              <MdClose/>
            </Button>
          </>
        }
      }
    })
  }

  useEffect(() => {
    setData(formattedData(employees))
  }, [employees]);
  return (
    <div>
      <div>
        <List headers={headers} data={data}/>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h1>This is the modal {selectedEmployee?.name}</h1>
      </Modal>
      <div>
        {
          ['default', 'info', 'primary', 'warning', 'error', 'success'].map((varient) => (<>
            <Button onClick={() => setIsOpen(true)} variant={varient}>
              Click Me
            </Button>
          </>))

        }
      </div>
      <div>
        {
          ['default', 'info', 'primary', 'warning', 'error', 'success'].map((varient) => (<>
            <Button onClick={() => console.log('Clicked!')} variant={varient} kind="outline">
              Click Me
            </Button>
          </>))

        }
      </div>
      <div>
        {
          ['default', 'info', 'primary', 'warning', 'error', 'success'].map((varient) => (<>
            <Button onClick={() => console.log('Clicked!')} variant={varient} kind="dashes">
              Click Me
            </Button>
          </>))

        }
      </div>
      <div>
        {
          ['default', 'info', 'primary', 'warning', 'error', 'success'].map((varient) => (<>
            <Button onClick={() => console.log('Clicked!')} variant={varient} kind="text">
              Click Me
            </Button>
          </>))

        }
      </div>
    </div>
  );
}
