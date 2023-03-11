import React from 'react';
import { useState, useContext } from 'react';
import { applicationContext } from '../../context/AplicationContext';
import NewTaskInput from '../../components/NewTaskInput/NewTaskInput';
import TaskListItem from '../../components/TaskListItem/TaskListItem';

function TaskPage() {
  const [activeClassName, setActiveClassName] = useState(true);
  const inputHidden = 'input-hidden';
  const { tasksList } = useContext(applicationContext);

  return (
    <>
      <div className="employees-header">
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

      {tasksList &&
        tasksList.map(
          (e) => !e.deleted && <TaskListItem key={e.id} item={e}></TaskListItem>
        )}
    </>
  );
}

export default TaskPage;
