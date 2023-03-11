import React, { useState, useContext } from 'react';
import { applicationContext } from '../../context/AplicationContext';
import './newTaskInput.css';
import DatePickerTask from '../DatePickerTask/DatePickerTask';

function NewTaskInput({ activeClassName, setActiveClassName }) {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescr, setTaskDescr] = useState('');
  const [taskAssignee, setTaskAssignee] = useState(1);
  const [taskDueDate, setTaskDueDate] = useState(new Date());

  const { tasksList, setTasksList, taskId, setTaskId , employeesList} = useContext(
    applicationContext
  );

  function handleTaskTitleInput(e) {
    setTaskTitle(e.target.value);
  }
  function handleTaskDescrInput(e) {
    setTaskDescr(e.target.value);
  }
  function handleTaskAssigneeInput(e) {
    setTaskAssignee(+e.target.value);
  }

  function createNewTask(event) {
    event.preventDefault();
    setActiveClassName(!activeClassName);
    setTaskId(taskId + 1);
    const newTask = {
      id: taskId,
      title: taskTitle,
      description: taskDescr,
      assignee: taskAssignee,
      dueDate: taskDueDate,
      deleted: false,
    };
    setTasksList([...tasksList, newTask]);
  }

  return (
    <>
      <form className="create-new-input-task" onSubmit={createNewTask}>
        <button
          type="button"
          className="close-btn"
          onClick={() => {
            setActiveClassName(!activeClassName);
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
          <DatePickerTask startDate={taskDueDate} setStartDate={setTaskDueDate} />
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
          <select name="assignee" id="cars" onChange={handleTaskAssigneeInput}>
          {employeesList.map((e)=>{return <option value={e.id}>{e.name}</option>})}
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
