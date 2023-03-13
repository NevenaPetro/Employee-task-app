import React from 'react';
import { applicationContext } from '../../context/AplicationContext';
import { useContext } from 'react';
import Moment from 'react-moment';
import '../TaskListItem/taskListItem.css';

function TaskListItem({ item }) {
  const {
    deleteTask,
    setTaskModalData,
    getAssigneeNameById,
    updateTask,
    getProjectTitleById,
  } = useContext(applicationContext);
  let start = 'START TASK';
  let finish = 'FINISH TASK';

  console.log(item);
  function updateTaskStatus(item) {
    if (item.isDoing) {
      item.isFinished = true;
      item.dateFinished = new Date();
    } else {
      item.isDoing = true;
    }

    updateTask(item);
  }
  return (
    <>
      <div className="task-title">
        <h2>{item.title}</h2>
        <p>
          <b>Due date:</b> <Moment format="DD/MM/YYYY">{item.dueDate}</Moment>
        </p>
        <p>
          <b>Assignee:</b> {getAssigneeNameById(item.assignee)}
        </p>
        <p>
          <b>Project:</b> {getProjectTitleById(item.project)}
        </p>
        {item.isFinished ? (
          <p>
            <b>DONE</b>
          </p>
        ) : item.isDoing ? (
          <p>
            <b>DOING</b>
          </p>
        ) : (
          <p>
            <b>TO DO</b>
          </p>
        )}
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
      {!item.isFinished && (
        <div className="task-status-btn">
          <button
            type="button"
            onClick={() => {
              updateTaskStatus(item);
            }}
          >
            {item.isDoing ? finish : start}
          </button>
        </div>
      )}
    </>
  );
}

export default TaskListItem;
