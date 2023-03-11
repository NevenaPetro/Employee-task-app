import React from 'react';
import { applicationContext } from '../../context/AplicationContext';
import { useContext } from 'react';
import '../TaskListItem/taskListItem.css';

function TaskListItem({ item }) {
  const { deleteTask, setTaskModalData } = useContext(applicationContext);

  return (
    <div className="task">
      <div className="task-title">
        <h2>{item.title}</h2>
        <p>
          <b>Due date:</b> {item.dueDate}
        </p>
      </div>

      <div className="task-descr">
        <p>{item.description}</p>
      </div>
      <div className="task-assignee">
        <p>{item.assignee}</p>
      </div>
      <div className="task-btns">
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
    </div>
  );
}

export default TaskListItem;
