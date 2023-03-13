import React from 'react';
import { useState, useContext } from 'react';
import { applicationContext } from '../../context/AplicationContext';
import NewTaskInput from '../../components/NewTaskInput/NewTaskInput';
import TaskListItem from '../../components/TaskListItem/TaskListItem';
import '../TasksPage/taskPage.css';

function TaskPage() {
  const inputHiddenTask = 'input-hidden-task';
  const { tasksList, activeClassNameTask, setActiveClassNameTask } = useContext(
    applicationContext
  );
  console.log(tasksList)

  return (
    <div className="task-page">
      <div className="tasks-header">
        <h2 className="title">TASKS</h2>
        <button
          type="button"
          className="btn-big"
          onClick={() => {
            setActiveClassNameTask(!activeClassNameTask);
          }}
        >
          Create new task
        </button>
      </div>
      <div
        className={`input-wrap-task ${
          activeClassNameTask ? inputHiddenTask : ''
        }`}
      >
        <NewTaskInput />
      </div>
      <div className="all-tasks">
        {tasksList &&
          tasksList.map((e) => (
            <div key={e.id} className="task">
              <TaskListItem item={e}></TaskListItem>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TaskPage;
