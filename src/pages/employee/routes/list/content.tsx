import {Button, List, Modal, Row} from "components/core";
import React, {useEffect, useState} from "react";
import {useNavigate, useRevalidator} from "react-router-dom";
import {deleteEmployee} from "api";
import {TableActions} from "components/common";

const headers = [
  {key: 'staffId', label: 'Staff ID'},
  {key: 'name', label: 'Name'},
  {key: 'joiningDate', label: 'Joining Date'},
  {key: 'basicSalary', label: 'Basic Salary'},
  {key: 'salaryAllowances', label: 'Salary Allowances'},
  {key: 'action', label: ''}, // Optional action column
];


export default function Content({employees}: any) {

  const revalidator = useRevalidator();
  const navigate = useNavigate();


  const [data, setData] = useState<any[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedEmployee, setSelectedEmployee] = useState<any>(undefined);


  useEffect(() => {
    setData(formattedData(employees))
  }, [employees]);

  const handleDeleteEmployee = async (id: number | string) => {
    try {
      await deleteEmployee(id);
      setData(data.filter(emp => emp.id !== id));
      revalidator.revalidate(); // Trigger revalidation to fetch the latest data
    } catch (err) {
    } finally {
      setIsOpen(false)
    }
  };

  const formattedData = (employees: any[]): any[] => {
    return employees.map(employee => {
      return {
        ...employee, action: {
          renderCol: () => <TableActions
            onInfoClick={() => {
              navigate(`${employee.id}`, {state: {data: employee}})
              setSelectedEmployee(employee);
            }}
            onUpdateClick={() => {
              navigate(`${employee.id}/update`, {state: {data: employee}})
              setSelectedEmployee(employee);
            }}
            onDeleteClick={() => {
              setIsOpen(true)
              setSelectedEmployee(employee);
            }}/>,
        }
      }
    })
  }
  return (
    <div>
      <div>
        <List headers={headers} data={data}/>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>Are you sure you want to delete this item? This action cannot be undone.</p>
        <Row gap="1rem" justifyContent="end">
          <Button variant="error" onClick={() => handleDeleteEmployee(selectedEmployee.id)}>
            Delete
          </Button>
          <Button variant="default"
                  onClick={() => setIsOpen(false)}>Cancel</Button>
        </Row>
      </Modal>
    </div>
  );
}
