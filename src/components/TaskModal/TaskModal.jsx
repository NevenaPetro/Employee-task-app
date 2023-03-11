import React from 'react';
import { useState, useContext } from 'react';
import { applicationContext } from '../../context/AplicationContext';
import '../TaskModal/taskModal.css';

function TaskModal({ item }) {
  const { setTaskModalData, updateTask } = useContext(applicationContext);
  const [newTitle, setNewTitle] = useState(item.title);
  const [newDescr, setNewDescr] = useState(item.description);
  const [newAssignee, setNewAssignee] = useState(item.assignee);
  const [newDueDate, setNewDueDate] = useState(item.dueDate);
  
  
  function changeTask(e) {
    e.preventDefault();
    const updatedTask = {
      id: item.id,
      title: newTitle,
      description: newDescr,
      assignee: newAssignee,
      dueDate: newDueDate,
      deleted: false,
    };
    updateTask(updatedTask);
    setTaskModalData(null);
  }

  function handleTitleInputChange(e) {
    setNewTitle(e.target.value);
  }

  function handleDescrInputChange(e) {
    setNewDescr(e.target.value);
  }
  function handleAssigneeInputChange(e) {
    setNewAssignee(e.target.value);
  }
  function handleDueDateInputChange(e) {
    setNewDueDate(e.target.value);
  }

  return (
    <>
      <div
        className="modal-bg"
        onClick={() => {
          setTaskModalData(null);
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
            onClick={() => setTaskModalData(null)}
          >
            X
          </button>

          <form className="modal-form" onSubmit={changeTask}>
            <input
              type="text"
              placeholder={item.title}
              value={newTitle}
              onChange={handleTitleInputChange}
              className="modal-input"
              
            ></input>
            <input
              type="text"
              placeholder={item.description}
              value={newDescr}
              onChange={handleDescrInputChange}
              className="modal-input"
            ></input>
            <input
              type="text"
              placeholder={item.assignee}
              value={newAssignee}
              onChange={handleAssigneeInputChange}
              className="modal-input"
            ></input>

            <input
              type="text"
              placeholder={item.dueDate}
              value={newDueDate}
              onChange={handleDueDateInputChange}
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

export default TaskModal;
