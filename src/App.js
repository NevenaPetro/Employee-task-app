import React from 'react';
import { ApplicationProvider } from './context/AplicationContext';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  addDoc,
  query,
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from './firebase.config';
import HomePage from './pages/HomePage/HomePage';
import EmployeesPage from './pages/EmployeesPage/EmployeesPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import TasksPage from './pages/TasksPage/TasksPage';
import Header from './components/Header/Header';
import AboutPage from './pages/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';
import EmplModal from './components/EmplModal/EmplModal';
import TaskModal from './components/TaskModal/TaskModal';
import ProjModal from './components/ProjModal/ProjModal';

import './app.css';

function App() {
  const [employeesList, setEmployeesList] = useState([]);
  const [tasksList, setTasksList] = useState([]);
  const [projectsList, setProjectsList] = useState([]);
  const [emplModalData, setEmplModalData] = useState(null);
  const [taskModalData, setTaskModalData] = useState(null);
  const [projectModalData, setProjectModalData] = useState(null);
  const [activeClassName, setActiveClassName] = useState(true);
  const [activeClassNameTask, setActiveClassNameTask] = useState(true);
  const [activeClassNameProject, setActiveClassNameProject] = useState(true);

  useEffect(() => {
    const fetchEmployeesList = async () => {
      try {
        const q = query(collection(db, 'employees'));
        const querySnap = await getDocs(q);
        const employeesList = [];

        querySnap.forEach((doc) => {
          return employeesList.push({
            id: doc.id,
            name: doc.data().name,
            email: doc.data().email,
            phone: doc.data().phone,
            dateOfBirth: doc.data().dateOfBirth.toDate(),
            salary: doc.data().salary,
          });
        });

        setEmployeesList(employeesList);
      } catch (error) {}
    };
    fetchEmployeesList();
  }, []);

  useEffect(() => {
    const fetchTasksList = async () => {
      try {
        const q = query(collection(db, 'tasks'));
        const querySnap = await getDocs(q);
        const tasksList = [];

        querySnap.forEach((doc) => {
          return tasksList.push({
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
            assignee: doc.data().assignee,
            project: doc.data().project,
            dueDate: doc.data().dueDate.toDate(),
            dateFinished: doc.data().dateFinished.toDate(),
            isFinished: doc.data().isFinished,
            isDoing: doc.data().isDoing,
          });
        });

        setTasksList(tasksList);
      } catch (error) {}
    };
    fetchTasksList();
  }, []);

  useEffect(() => {
    const fetchProjectsList = async () => {
      try {
        const q = query(collection(db, 'projects'));
        const querySnap = await getDocs(q);
        const projectsList = [];

        querySnap.forEach((doc) => {
          return projectsList.push({
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
          });
        });
        setProjectsList(projectsList);
      } catch (error) {}
    };
    fetchProjectsList();
  }, []);

  async function createNewEmployee(newEmployee) {
    setActiveClassName(!activeClassName);
    const docRef = await addDoc(collection(db, 'employees'), newEmployee);
    newEmployee.id = docRef.id;
    setEmployeesList([...employeesList, newEmployee]);
  }

  function deleteEmployee(item) {
    setEmployeesList(employeesList.filter((e) => e.id !== item.id));
    deleteDoc(doc(db, 'employees', item.id));
  }
  function updateEmployee(item) {
    let differenceList = employeesList.filter((e) => e.id !== item.id);
    setEmployeesList([...differenceList, item]);
    updateDoc(doc(db, 'employees', item.id), {
      name: item.name,
      email: item.email,
      phone: item.phone,
      dateOfBirth: item.dateOfBirth,
      salary: item.salary,
    });
  }

  async function createNewTask(newTask) {
    setActiveClassName(!activeClassName);
    const docRef = await addDoc(collection(db, 'tasks'), newTask);
    newTask.id = docRef.id;
    setTasksList([...tasksList, newTask]);
  }

  function deleteTask(item) {
    setTasksList(tasksList.filter((e) => e.id !== item.id));
    deleteDoc(doc(db, 'tasks', item.id));
  }

  function updateTask(item) {
    let differenceList = tasksList.filter((e) => e.id !== item.id);
    setTasksList([...differenceList, item]);
    updateDoc(doc(db, 'tasks', item.id), {
      title: item.title,
      description: item.description,
      assignee: item.assignee,
      dueDate: item.dueDate,
      dateFinished: item.dateFinished,
      isFinished: item.isFinished,
      isDoing: item.isDoing,
    });
  }

  function getAssigneeNameById(id) {
    let employee = employeesList.find((e) => e.id === id);
    return employee ? employee.name : 'deleted emloyee';
  }

  async function createNewProject(newProject) {
    setActiveClassNameProject(!activeClassNameProject);
    const docRef = await addDoc(collection(db, 'projects'), newProject);
    newProject.id = docRef.id;
    setProjectsList([...projectsList, newProject]);
  }

  function deleteProject(item) {
    setProjectsList(projectsList.filter((e) => e.id !== item.id));
    deleteDoc(doc(db, 'projects', item.id));
  }
  function updateProject(item) {
    let differenceList = projectsList.filter((e) => e.id !== item.id);
    setProjectsList([...differenceList, item]);
    updateDoc(doc(db, 'projects', item.id), {
      title: item.title,
      description: item.description,
    });
  }
  function getProjectTitleById(id) {
    console.log(id)
    console.log(projectsList)

    let project = projectsList.find((e) => e.id === id);
    return project ? project.title : 'deleted project';
  }

  return (
    <ApplicationProvider
      value={{
        employeesList,
        setEmployeesList,
        tasksList,
        setTasksList,
        createNewEmployee,
        deleteEmployee,
        updateEmployee,
        setEmplModalData,
        deleteTask,
        setTaskModalData,
        updateTask,
        getAssigneeNameById,
        activeClassName,
        setActiveClassName,
        createNewTask,
        activeClassNameTask,
        setActiveClassNameTask,
        activeClassNameProject,
        setActiveClassNameProject,
        createNewProject,
        deleteProject,
        updateProject,
        projectsList,
        setProjectModalData,
        getProjectTitleById
      }}
    >
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      {emplModalData && <EmplModal item={emplModalData} />}
      {taskModalData && <TaskModal item={taskModalData} />}
      {projectModalData && <ProjModal item={projectModalData} />}
      <Footer />
    </ApplicationProvider>
  );
}

export default App;
