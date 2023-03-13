import React, { useState, useContext } from 'react';
import { applicationContext } from '../../context/AplicationContext';
import './newProjectInput.css';

function NewProjectInput() {
  const [projTitle, setProjTitle] = useState('');
  const [projDescr, setProjDescr] = useState('');

  const {
    createNewProject,
    setActiveClassNameProject,
    activeClassNameProject,
  } = useContext(applicationContext);

  function handleSubmitNewProject(event) {
    event.preventDefault();
    const newProject = {
      title: projTitle,
      description: projDescr,
    };

    createNewProject(newProject);
  }

  function handleProjTitleInput(e) {
    setProjTitle(e.target.value);
  }
  function handleProjDescrInput(e) {
    setProjDescr(e.target.value);
  }

  return (
    <>
      <form className="create-new-input-proj" onSubmit={handleSubmitNewProject}>
        <button
          type="button"
          className="close-btn"
          onClick={() => {
            setActiveClassNameProject(!activeClassNameProject);
          }}
        >
          X
        </button>
        <div className="label-input-proj">
          <label htmlFor="title">Project Title</label>
          <input
            placeholder="Title"
            onChange={handleProjTitleInput}
            required
            name="title"
          ></input>
        </div>
        <div className="label-input-proj">
          <label htmlFor="description">Project Description</label>
          <textarea
            placeholder="Description"
            onChange={handleProjDescrInput}
            required
            name="description"
          ></textarea>
        </div>
        <button type="submit" className="btn-md">
          Create
        </button>
      </form>
    </>
  );
}

export default NewProjectInput;
