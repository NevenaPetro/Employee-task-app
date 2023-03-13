import React, { useState, useContext } from 'react';
import { applicationContext } from '../../context/AplicationContext';
import './newTaskInput.css';
import DatePickerTask from '../DatePickerTask/DatePickerTask';

function NewTaskInput() {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescr, setTaskDescr] = useState('');
  const [taskAssignee, setTaskAssignee] = useState('');
  const [taskProject, setTaskProject] = useState('');
  const [taskDueDate, setTaskDueDate] = useState(new Date());
  
  

  const {
    createNewTask,
    employeesList,
    projectsList,
    activeClassNameTask,
    setActiveClassNameTask,
  } = useContext(applicationContext);

  function handleTaskTitleInput(e) {
    setTaskTitle(e.target.value);
  }
  function handleTaskDescrInput(e) {
    setTaskDescr(e.target.value);
  }
  function handleTaskAssigneeInput(e) {
    setTaskAssignee(e.target.value);
  }
  function handleTaskProjectInput(e) {
    setTaskProject(e.target.value);
  }

  function handleSubmitNewTask(event) {
    event.preventDefault();
    const newTask = {
      title: taskTitle,
      description: taskDescr,
      assignee: taskAssignee,
      project: taskProject,
      dueDate: taskDueDate,
    };
    createNewTask(newTask);
    setActiveClassNameTask(!activeClassNameTask);
  }

  return (
    <>
      <form className="create-new-input-task" onSubmit={handleSubmitNewTask}>
        <button
          type="button"
          className="close-btn"
          onClick={() => {
            setActiveClassNameTask(!activeClassNameTask);
          }}
        >
          X
        </button>
        <div className="label-input-task">
          <label htmlFor="title">Task Title</label>
          <input
            name="title"
            placeholder="enter"
            onChange={handleTaskTitleInput}
          ></input>
        </div>
        <div className="label-input-task">
          <p>Task Due Date</p>
          <DatePickerTask
            startDate={taskDueDate}
            setStartDate={setTaskDueDate}
          />
        </div>
        <div className="label-input-task">
          <label htmlFor="descr">Task Description</label>
          <textarea
            name="descr"
            placeholder="enter"
            onChange={handleTaskDescrInput}
          ></textarea>
        </div>
        <div className="label-input-task">
          <label htmlFor="assignee">Choose assignee</label>
          <select
            defaultValue={''}
            required
            name="assignee"
            onChange={handleTaskAssigneeInput}
          >
            <option value="" disabled hidden>
              Please Choose...
            </option>
            {employeesList.map((e) => {
              return (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="label-input-task">
          <label htmlFor="project">Choose project</label>
          <select
            defaultValue={''}
            required
            name="project"
            onChange={handleTaskProjectInput}
          >
            <option value="" disabled hidden>
              Please Choose...
            </option>
            {projectsList.map((e) => {
              return (
                <option key={e.id} value={e.id}>
                  {e.title}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" className="btn-md">
          Create
        </button>
      </form>
    </>
  );
}

export default NewTaskInput;
