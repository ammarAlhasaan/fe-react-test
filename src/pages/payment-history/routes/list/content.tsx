import {List} from "components/core";
import React from "react";

const headers = [
  {key: 'employeeName', label: 'Name'},
  {key: 'basicSalary', label: 'Basic'},
  {key: 'salaryAllowances', label: 'Allowances'},
  {key: 'salaryDate', label: 'Date'},
  {key: 'additions', label: 'Additions'},
  {key: 'deductions', label: 'Deductions'},
  {key: 'total', label: 'Total'},
  {key: 'createdAt', label: 'Created'}
];

export default function Content({paymentHistory}: any) {

  return (
    <div>
      <div>
        <List headers={headers} data={paymentHistory}/>
      </div>
    </div>
  );
}
