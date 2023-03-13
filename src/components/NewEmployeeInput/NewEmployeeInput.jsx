import React, { useState, useContext } from 'react';
import { applicationContext } from '../../context/AplicationContext';
import './newEmployeeInput.css';
import DatePickerBirth from '../DatePickerBirth/DatePickerBirth';

function NewEmployeeInput() {
  const [emplName, setEmplName] = useState('');
  const [emplEmail, setEmplEmail] = useState('');
  const [emplPhone, setEmplPhone] = useState('');
  const [emplBirth, setEmplBirth] = useState(new Date());
  const [emplSalary, setEmplSalary] = useState('');

  const { createNewEmployee } = useContext(applicationContext);

  function handleSubmitNewEmpl(event) {
    event.preventDefault();
    const newEmployee = {
      name: emplName,
      email: emplEmail,
      phone: emplPhone,
      dateOfBirth: emplBirth,
      salary: emplSalary,
    };

    createNewEmployee(newEmployee);
  }

  function handleEmplNameInput(e) {
    setEmplName(e.target.value);
  }
  function handleEmplEmailInput(e) {
    setEmplEmail(e.target.value);
  }
  function handleEmplPhoneInput(e) {
    setEmplPhone(e.target.value);
  }
  function handleEmplSalaryInput(e) {
    setEmplSalary(e.target.value);
  }

  return (
    <>
      <form className="create-new-input-empl" onSubmit={handleSubmitNewEmpl}>
        <input
          placeholder="Full Name"
          onChange={handleEmplNameInput}
          required
        ></input>
        <input
          placeholder="email"
          onChange={handleEmplEmailInput}
          required
        ></input>
        <input
          type="tel"
          placeholder="+000 00 1234567"
          onChange={handleEmplPhoneInput}
          required
        ></input>
        <DatePickerBirth startDate={emplBirth} setStartDate={setEmplBirth} />
        <input
          placeholder="monthly salary"
          onChange={handleEmplSalaryInput}
          required
        ></input>
        <button type="submit" className="btn-md">
          Create
        </button>
      </form>
    </>
  );
}

export default NewEmployeeInput;
