import React, { useState, useContext } from 'react';
import { applicationContext } from '../../context/AplicationContext';
import './newEmployeeInput.css';

function NewEmployeeInput({ activeClassName, setActiveClassName }) {
  const [emplName, setEmplName] = useState('');
  const [emplEmail, setEmplEmail] = useState('');
  const [emplPhone, setEmplPhone] = useState('');
  const [emplBirth, setEmplBirth] = useState('');
  const [emplSalary, setEmplSalary] = useState('');
  const { employeesList, setEmployeesList } = useContext(applicationContext);

  function handleEmplNameInput(e) {
    setEmplName(e.target.value);
  }
  function handleEmplEmailInput(e) {
    setEmplEmail(e.target.value);
  }
  function handleEmplPhoneInput(e) {
    setEmplPhone(e.target.value);
  }
  function handleEmplBirthInput(e) {
    setEmplBirth(e.target.value);
  }
  function handleEmplSalaryInput(e) {
    setEmplSalary(e.target.value);
  }

  function createNewEmployye(event) {
    event.preventDefault();
    setActiveClassName(!activeClassName);
    const newEmployee = {
      name: emplName,
      email: emplEmail,
      phone: emplPhone,
      dateOfBirth: emplBirth,
      salary: emplSalary,
    };
    setEmployeesList([...employeesList, newEmployee]);
  }

  return (
    <>
      <form className="create-new-input" onSubmit={createNewEmployye}>
        <input
          placeholder="Full Name"
          
          onChange={handleEmplNameInput}
        ></input>
        <input
          placeholder="email"
        
          onChange={handleEmplEmailInput}
        ></input>
        <input
          placeholder="phone number"
          
          onChange={handleEmplPhoneInput}
        ></input>
        <input
          placeholder="date of birth"
          
          onChange={handleEmplBirthInput}
        ></input>
        <input
          placeholder="monthly salary"
          
          onChange={handleEmplSalaryInput}
        ></input>
        <button type="submit" className="btn-md">
          Create
        </button>
      </form>
    </>
  );
}

export default NewEmployeeInput;
