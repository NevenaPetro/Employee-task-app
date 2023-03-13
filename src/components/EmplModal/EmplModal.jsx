import React from 'react';
import { useState, useContext } from 'react';
import { applicationContext } from '../../context/AplicationContext';
import '../EmplModal/emplModal.css';
import DatePickerBirth from '../DatePickerBirth/DatePickerBirth';

function EmplModal({ item }) {
  const { setEmplModalData, updateEmployee } = useContext(applicationContext);
  const [newName, setNewName] = useState(item.name);
  const [newEmail, setNewEmail] = useState(item.email);
  const [newPhone, setNewPhone] = useState(item.phone);
  const [newDateOfBirth, setNewDateOfBirth] = useState(item.dateOfBirth);
  const [newSalary, setNewSalary] = useState(item.salary);

  function changeEmployee(e) {
    e.preventDefault();
    const updatedEmployee = {
      id: item.id,
      name: newName,
      email: newEmail,
      phone: newPhone,
      dateOfBirth: newDateOfBirth,
      salary: newSalary,
    };
    updateEmployee(updatedEmployee);
    setEmplModalData(null);
  }

  function handleNameInputChange(e) {
    setNewName(e.target.value);
  }

  function handleEmailInputChange(e) {
    setNewEmail(e.target.value);
  }
  function handlePhoneInputChange(e) {
    setNewPhone(e.target.value);
  }
  function handleSalaryInputChange(e) {
    setNewSalary(e.target.value);
  }

  return (
    <>
      <div
        className="modal-bg"
        onClick={() => {
          setEmplModalData(null);
        }}
      >
        <div
          className="modal"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <button
            className={'close-btn'}
            type={'button'}
            onClick={() => setEmplModalData(null)}
          >
            X
          </button>

          <form className="modal-form" onSubmit={changeEmployee}>
            <input
              type="text"
              placeholder={item.name}
              value={newName}
              onChange={handleNameInputChange}
              className="modal-input"
            ></input>
            <input
              type="text"
              placeholder={item.email}
              value={newEmail}
              onChange={handleEmailInputChange}
              className="modal-input"
            ></input>
            <input
              type="text"
              placeholder={item.phone}
              value={newPhone}
              onChange={handlePhoneInputChange}
              className="modal-input"
            ></input>

            <DatePickerBirth
              startDate={newDateOfBirth}
              setStartDate={setNewDateOfBirth}
            />

            <input
              type="text"
              placeholder={item.salary}
              value={newSalary}
              onChange={handleSalaryInputChange}
              className="modal-input"
            ></input>

            <button className="btn-md" type="submit">
              update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EmplModal;
