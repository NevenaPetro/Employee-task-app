import React, { useState, useContext } from 'react';
import { applicationContext } from '../../context/AplicationContext';
import './newTaskInput.css';

function NewTaskInput({ activeClassName, setActiveClassName }) {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescr, setTaskDescr] = useState('');
  const [taskAssignee, setTaskAssignee] = useState([]);
  const [taskDueDate, setTaskDueDate] = useState('');
  
  const {
    tasksList,
    setTasksList,
    taskId,
    setTaskId,
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
  function handleTaskDueDateInput(e) {
    setTaskDueDate(e.target.value);
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
        <input placeholder="Task Title" onChange={handleTaskTitleInput}></input>
        <textarea placeholder="Task Description" onChange={handleTaskDescrInput}></textarea>
        <input
          placeholder="Task Assignee"
          onChange={handleTaskAssigneeInput}
        ></input>
        <input
          placeholder="Task Due Date"
          onChange={handleTaskDueDateInput}
        ></input>
        <button type="submit" className="btn-md">
          Create
        </button>
      </form>
    </>
  );
}

export default NewTaskInput;
