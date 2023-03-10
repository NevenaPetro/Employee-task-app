import React from 'react';
import { useState, useContext } from 'react';
import { applicationContext } from '../../context/AplicationContext';
import NewEmployeeInput from '../../components/NewEmployeeInput/NewEmployeeInput';
import EmplListItem from '../../components/EmplListItem/EmplListItem';
import '../EmployeesPage/employeesPage.css';

function EmployeesPage() {
  const [activeClassName, setActiveClassName] = useState(true);
  const inputHidden = 'input-hidden';
  const { employeesList } = useContext(applicationContext);

  return (
    <>
      <div className="employees-header">
        <h1 className="title">Employees</h1>
        <button
          type="button"
          className="btn-big"
          onClick={() => {
            setActiveClassName(!activeClassName);
          }}
        >
          Create new employee
        </button>
      </div>
      <div className={`input-wrap ${activeClassName ? inputHidden : ''}`}>
        <NewEmployeeInput
          activeClassName={activeClassName}
          setActiveClassName={setActiveClassName}
        />
      </div>
      <table className="empl-list">
        <tbody>
          <tr>
            <th></th>
            <th>Name</th>
            <th>email</th>
            <th>Phone</th>
            <th>Date of birth</th>
            <th>Monthly salary</th>
          </tr>
          {employeesList &&
            employeesList.map((e) => (
              <tr>
                {!e.deleted && <EmplListItem key={e.id} item={e}></EmplListItem>}
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default EmployeesPage;
