import React from 'react';
import { applicationContext } from '../../context/AplicationContext';
import { useContext } from 'react';
import Moment from 'react-moment';
import '../TaskListItem/taskListItem.css';


function TaskListItem({ item }) {
  const { deleteTask, setTaskModalData, getAssigneeNameById } = useContext(applicationContext);

  return (
    <div className="task">
      <div className="task-title">
        <h2>{item.title}</h2>
        <p>
          <b>Due date:</b> <Moment format="DD/MM/YYYY">{item.dueDate}</Moment>
        </p>
        <p><b>Assignee:</b> {getAssigneeNameById(item.assignee)}</p>

      </div>

      <div className="task-descr">
        <p>{item.description}</p>
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
