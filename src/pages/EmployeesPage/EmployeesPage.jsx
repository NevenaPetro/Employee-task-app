import React from 'react';
import { useContext } from 'react';
import { applicationContext } from '../../context/AplicationContext';
import NewEmployeeInput from '../../components/NewEmployeeInput/NewEmployeeInput';
import EmplListItem from '../../components/EmplListItem/EmplListItem';
import '../EmployeesPage/employeesPage.css';

function EmployeesPage() {
  const inputHidden = 'input-hidden';
  const { employeesList, activeClassName, setActiveClassName } = useContext(
    applicationContext
  );
  return (
    <div className="empl-page">
      <div className="employees-header">
        <h2 className="title">EMPLOYEES</h2>
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
        <NewEmployeeInput />
      </div>
      <table className="empl-list">
        <tbody>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date of birth</th>
            <th>Monthly salary</th>
          </tr>
          {employeesList &&
            employeesList.map((e) => (
              <tr key={e.id}>
                <EmplListItem item={e}></EmplListItem>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeesPage;
