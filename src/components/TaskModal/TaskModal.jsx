import React from 'react';
import { useState, useContext } from 'react';
import { applicationContext } from '../../context/AplicationContext';
import DatePickerTask from '../DatePickerTask/DatePickerTask';
import '../TaskModal/taskModal.css';

function TaskModal({ item }) {
  const { setTaskModalData, updateTask } = useContext(applicationContext);
  const [newTitle, setNewTitle] = useState(item.title);
  const [newDescr, setNewDescr] = useState(item.description);
  const [newAssignee, setNewAssignee] = useState(item.assignee);
  const [newDueDate, setNewDueDate] = useState(item.dueDate);
  const [newDateFinished, setNewDateFinished] = useState(item.dateFinished);
  const [newIsFinished, setNewIsFinished] = useState(item.isFinished);
  const [newIsDoing, setNewIsDoing] = useState(item.isDoing);

  function changeTask(e) {
    e.preventDefault();
    const updatedTask = {
      id: item.id,
      title: newTitle,
      description: newDescr,
      assignee: newAssignee,
      dueDate: newDueDate,
      dateFinished: newDateFinished,
      isFinished: newIsFinished,
      isDoing: newIsDoing,
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

  return (
    <>
      <div
        className="modal-bg"
        onClick={() => {
          setTaskModalData(null);
        }}
      >
        <div
          className="modal-task"
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

          <form className="modal-task-form" onSubmit={changeTask}>
            <input
              type="text"
              placeholder={item.title}
              value={newTitle}
              onChange={handleTitleInputChange}
              className="modal-task-input"
            ></input>
            <textarea
              type="text"
              placeholder={item.description}
              value={newDescr}
              onChange={handleDescrInputChange}
              className="modal-task-textarea"
            ></textarea>
            <input
              type="text"
              placeholder={item.assignee}
              value={newAssignee}
              onChange={handleAssigneeInputChange}
              className="modal-task-input"
            ></input>

            <DatePickerTask
              startDate={newDueDate}
              setStartDate={setNewDueDate}
            />

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
