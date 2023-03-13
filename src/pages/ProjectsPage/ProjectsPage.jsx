import React from 'react';
import { useContext } from 'react';
import { applicationContext } from '../../context/AplicationContext';
import NewProjectInput from '../../components/NewProjectInput/NewProjectInput';
import ProjectListItem from '../../components/ProjectListItem/ProjectListItem';
import '../ProjectsPage/projectsPage.css';

function ProjectsPage() {
  const inputHiddenProject = 'input-hidden-project';
  const { projectsList, activeClassNameProject, setActiveClassNameProject } =
    useContext(applicationContext);

  return (
    <div className="project-page">
      <div className="project-header">
        <h2 className="title">PROJECTS</h2>
        <button
          type="button"
          className="btn-big"
          onClick={() => {
            setActiveClassNameProject(!activeClassNameProject);
          }}
        >
          Create new project
        </button>
      </div>
      <div
        className={`input-wrap-project ${
          activeClassNameProject ? inputHiddenProject : ''
        }`}
      >
        <NewProjectInput />
      </div>
      <div className="all-projects">
        {projectsList &&
          projectsList.map((e) => (
            <div key={e.id} className="project">
              <ProjectListItem item={e}></ProjectListItem>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
