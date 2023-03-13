import React from 'react';
import '../HomePage/homePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <h3>Setup guide</h3>
      <br />
      <p>
        {' '}
        The code of this app is on GitHub:
        <br />
        https://github.com/NevenaPetro/Employee-task-app <br />
        In order to start the app you must follow these steps: <br />
        <br />
        download repository <br />
        npm install <br />
        npm start <br />
        <br />
        This app is created with React.js. Storage is on Firebase, so it needs a
        web connection in order to work.
      </p>
      <br />
      <h3>Folder structure</h3>
      <br />
      <p>
        Folder src contains main files like index.js, App.js, app.css,
        firebase.config.js, and two main folders, components, and pages. <br />
        Folder pages include five pages that structure the app, and folder
        components contain all other components that are in the app.
      </p>
      <br />
      <h3>Description of the additional functionalities</h3>
      <br />
      <p>
        Additional entity - Project <br />
        <br />
        Besides entities like EMPLOYEE and TASK, in this app, there is added
        another one, PROJECT. A project can be created, read, updated, and
        deleted. <br />
        Every project contains a title, description, and belonging tasks. Tasks
        are presented in three colors for various states of task status. <br />
        Each project has displayed a number of finished and total number of
        tasks. I choose to add projects because that is a usual feature in these
        kinds of apps. <br />
        <br />
        Additional statistic - Urgent tasks <br />
        <br />
        Besides Top five employees, I choose to add another statistic that shows
        tasks by the time remaining until the due date. <br />
        Only tasks that are not finished are shown. It seemed useful to have an
        easy way to see which tasks are urgent and need to be done first.
      </p>
    </div>
  );
}

export default HomePage;
