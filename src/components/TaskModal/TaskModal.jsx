import React from 'react';
import { useState, useContext } from 'react';
import { applicationContext } from '../../context/AplicationContext';
import DatePickerTask from '../DatePickerTask/DatePickerTask';
import '../TaskModal/taskModal.css';

function TaskModal({ item }) {
  const { setTaskModalData, updateTask, employeesList, projectsList } = useContext(
    applicationContext
  );
  const [newTitle, setNewTitle] = useState(item.title);
  const [newDescr, setNewDescr] = useState(item.description);
  const [newAssignee, setNewAssignee] = useState(item.assignee);
  const [newProject, setNewProject] = useState(item.project);
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
      project: newProject,
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
  function handleProjectInputChange(e) {
    setNewProject(e.target.value);
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
            <label htmlFor="title">Task Title</label>
            <input
              type="text"
              placeholder={item.title}
              value={newTitle}
              onChange={handleTitleInputChange}
              name="title"
            ></input>
            <p>Task Due Date</p>
            <DatePickerTask
              startDate={newDueDate}
              setStartDate={setNewDueDate}
            />
            <label htmlFor="descr">Task Description</label>
            <textarea
              type="text"
              placeholder={item.description}
              value={newDescr}
              onChange={handleDescrInputChange}
              name="descr"
            ></textarea>
            <label htmlFor="assignee">Choose assignee</label>
            <select
              value={item.assignee}
              name="assignee"
              onChange={handleAssigneeInputChange}
            >
              {employeesList.map((e) => {
                return (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                );
              })}
            </select>
            <label htmlFor="project">Choose project</label>
            <select
              value={item.project}
              name="project"
              onChange={handleProjectInputChange}
            >
              {projectsList.map((e) => {
                return (
                  <option key={e.id} value={e.id}>
                    {e.title}
                  </option>
                );
              })}
            </select>
            

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
