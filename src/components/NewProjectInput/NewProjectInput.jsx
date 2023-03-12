import React, { useState, useContext } from 'react';
import { applicationContext } from '../../context/AplicationContext';
import './newProjectInput.css';


function NewProjectInput() {

  const [projTitle, setProjTitle] = useState('');
  const [projDescr, setProjDescr] = useState('');


  const {
    createNewProject
  } = useContext(applicationContext);

  function handleSubmitNewProject(event) {
    event.preventDefault();
    const newProject = {
      title: projTitle,
      description: projDescr,
    };

    createNewProject(newProject)
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
        <input
          placeholder="Title"
          onChange={handleProjTitleInput}
          required
        ></input>
        <input
          placeholder="Description"
          onChange={handleProjDescrInput}
          required
        ></input>
        <button type="submit" className="btn-md">
          Create
        </button>
      </form>
    </>
  );
}

export default NewProjectInput;
