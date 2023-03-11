import React from 'react';
import { useState, useContext } from 'react';
import { applicationContext } from '../../context/AplicationContext';
import NewTaskInput from '../../components/NewTaskInput/NewTaskInput';
import TaskListItem from '../../components/TaskListItem/TaskListItem';
import '../TasksPage/taskPage.css';

function TaskPage() {
  const [activeClassName, setActiveClassName] = useState(true);
  const inputHidden = 'input-hidden';
  const { tasksList } = useContext(applicationContext);

  return (
    <div className="task-page">
      <div className="tasks-header">
        <h2 className="title">TASKS</h2>
        <button
          type="button"
          className="btn-big"
          onClick={() => {
            setActiveClassName(!activeClassName);
          }}
        >
          Create new task
        </button>
      </div>
      <div className={`input-wrap ${activeClassName ? inputHidden : ''}`}>
        <NewTaskInput
          activeClassName={activeClassName}
          setActiveClassName={setActiveClassName}
        />
      </div>
      <div className="all-tasks">
        {tasksList &&
          tasksList.map(
            (e) =>
              !e.deleted && <TaskListItem key={e.id} item={e}></TaskListItem>
          )}
      </div>
    </div>
  );
}

export default TaskPage;
