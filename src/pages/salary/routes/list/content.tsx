import {Button, List, Modal, Row} from "components/core";
import React, {useEffect, useState} from "react";
import {useNavigate, useRevalidator} from "react-router-dom";
import {TableActions} from "components/common";
import {deleteSalary} from "api";

const headers = [
  {key: 'employeeName', label: 'Name'},
  {key: 'basicSalary', label: 'Basic'},
  {key: 'salaryAllowances', label: 'Allowances'},
  {key: 'salaryDate', label: 'Date'},
  {key: 'additions', label: 'Additions'},
  {key: 'deductions', label: 'Deductions'},
  {key: 'total', label: 'Total'},
  {key: 'action', label: ''}
];



export default function Content({salaries}: any) {
  const navigate = useNavigate();
  const revalidator = useRevalidator();

  const [data, setData] = useState<any[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedSalary, setSelectedSalary] = useState<any>(undefined);


  useEffect(() => {
    setData(formattedData(salaries))
  }, [salaries]);

  const handleDeleteSalary = async (id: number | string) => {
    try {
      await deleteSalary(id);
      setData(data.filter(emp => emp.id !== id));
      revalidator.revalidate(); // Trigger revalidation to fetch the latest data
    } catch (err) {
    } finally {
      setIsOpen(false)
    }
  };

  const formattedData = (salaries: any[]): any[] => {
    return salaries?.map(salary => {
      return {
        ...salary, action: {
          renderCol: () => <TableActions
            onInfoClick={() => {
              navigate(`${salary.id}`, {state: {data: salary}})
              setSelectedSalary(salary);
            }}
            onUpdateClick={() => {
              navigate(`${salary.id}/update`, {state: {data: salary}})
              setSelectedSalary(salary);
            }}
            onDeleteClick={() => {
              setIsOpen(true)
              setSelectedSalary(salary);
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
          <Button variant="error" onClick={() => handleDeleteSalary(selectedSalary.id)}>
            Delete
          </Button>
          <Button variant="default"
                  onClick={() => setIsOpen(false)}>Cancel</Button>
        </Row>
      </Modal>
    </div>
  );
}
