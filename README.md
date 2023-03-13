# About

Employee-Task App is a simple web application that allows you to assign employee to their tasks and track their progress. 

## Features
You can create, read, update, and delete tasks.
You can create, read, update, and delete employee.
You can create, read, update, and delete project (set of tasks).
You can view the progress of all tasks and projects.
Responsive design that works only on desktop.

## Setup guide

The code of this app is on GitHub:
https://github.com/NevenaPetro/Employee-task-app
In order to start the app you must follow these steps:

download repository
npm install
npm start

This app is created with React.js. 
Storage is on Firebase, so it needs a web connection in order to work.

## Folder structure

Folder src contains main files like index.js, App.js, app.css, firebase.config.js, and two main folders, components, and pages. Folder pages include five pages that structure the app, and folder components contain all other components that are in the app.

## Description of the additional functionalities

### `Additional entity - Project`

Besides entities like EMPLOYEE and TASK, in this app, there is added another one, PROJECT. A project can be created, read, updated, and deleted. Every project contains a title, description, and belonging tasks. Tasks are presented in three colors for various states of task status. Each project has displayed a number of finished and total number of tasks. I choose to add projects because that is a usual feature in these kinds of apps. 

### `Additional statistic - Urgent tasks`

Besides Top five employees, I choose to add another statistic that shows tasks by the time remaining until the due date. Only tasks that are not finished are shown. It seemed useful to have an easy way to see which tasks are urgent and need to be done first.
