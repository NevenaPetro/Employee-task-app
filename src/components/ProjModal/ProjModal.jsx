import React from 'react';
import { useState, useContext } from 'react';
import { applicationContext } from '../../context/AplicationContext';
import '../ProjModal/projModal.css';

function TaskModal({ item }) {
  const { setProjectModalData, updateProject } = useContext(
    applicationContext
  );
  const [newProjTitle, setNewProjTitle] = useState(item.title);
  const [newProjDescr, setNewProjDescr] = useState(item.description);

  function changeProject(e) {
    e.preventDefault();
    const updatedProject = {
      id: item.id,
      title: newProjTitle,
      description: newProjDescr,
    };
    updateProject(updatedProject);
    setProjectModalData(null);
  }

  function handleProjectTitleInputChange(e) {
    setNewProjTitle(e.target.value);
  }

  function handleProjectDescrInputChange(e) {
    setNewProjDescr(e.target.value);
  }
  

  return (
    <>
      <div
        className="modal-bg"
        onClick={() => {
          setProjectModalData(null);
        }}
      >
        <div
          className="modal-proj"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <button
            className={'close-btn'}
            type={'button'}
            onClick={() => setProjectModalData(null)}
          >
            X
          </button>

          <form className="modal-proj-form" onSubmit={changeProject}>
            <label htmlFor="title">Project Title</label>
            <input
              type="text"
              placeholder={item.title}
              value={newProjTitle}
              onChange={handleProjectTitleInputChange}
              name="title"
            ></input>
            <label htmlFor="descr">Task Description</label>
            <textarea
              type="text"
              placeholder={item.description}
              value={newProjDescr}
              onChange={handleProjectDescrInputChange}
              name="descr"
            ></textarea>
            <button className="btn-md" type="submit">
              update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default TaskModal;
