import React from 'react';
import { applicationContext } from '../../context/AplicationContext';
import { useContext } from 'react';
import '../TaskListItem/taskListItem.css';

function TaskListItem({ item }) {
  const { deleteTask, setTaskModalData } = useContext(applicationContext);

  return (
    <div>
      <div>
        <h3>{item.title}</h3>
        <p>{item.dueDate}</p>
      </div>
      <p>{item.description}</p>

      <p>{item.assignee}</p>

      <button
        type="button"
        onClick={() => {
          setTaskModalData(item);
        }}
        className="btn-md"
      >
        update
      </button>

      <button
        type="button"
        onClick={() => {
          deleteTask(item);
        }}
        className="btn-md"
      >
        delete
      </button>
    </div>
  );
}

export default TaskListItem;
