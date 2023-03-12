import React from 'react';
import { applicationContext } from '../../context/AplicationContext';
import { useContext } from 'react';
import '../ProjectListItem/projectListItem.css';

function ProjectListItem({ item }) {
  const { deleteProject, setProjectModalData, tasksList } = useContext(
    applicationContext
  );
let done = 'taskDone';
let doing = 'taskDoing';
let toDo = 'taskToDo';

  function getProjectTasks() {
    return tasksList.filter((e) => item.id === e.project);
  }
  function getProjectStatus() {
    let total = getProjectTasks().length;
    let finished = getProjectTasks().filter((e) => e.isFinished).length;
    return `${finished}/${total}`

  }
  return (
    <>
      <div className="project-title">
        <h2>{item.title}</h2>
        <p><b>Tasks finished: </b>{getProjectStatus()}</p>
      </div>
      <div className="project-descr">
        <p>{item.description}</p>
      </div>
      <div className="project-tasks">
        {getProjectTasks().map((e) => (
          <p
            className={`${e.isFinished ? done : e.isDoing ? doing : toDo}`}
            key={e.id}
          >
            {e.title}
          </p>
        ))}
      </div>
      <div className="task-btns">
        <button
          type="button"
          onClick={() => {
            setProjectModalData(item);
          }}
          className="btn-md"
        >
          update
        </button>
        <button
          type="button"
          onClick={() => {
            deleteProject(item);
          }}
          className="btn-md"
        >
          delete
        </button>
      </div>
    </>
  );
}

export default ProjectListItem;
