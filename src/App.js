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
import TasksPage from './pages/TasksPage/TasksPage';
import Header from './components/Header/Header';
import AboutPage from './pages/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';
import EmplModal from './components/EmplModal/EmplModal';
import TaskModal from './components/TaskModal/TaskModal';

import './app.css';

function App() {
  const [employeesList, setEmployeesList] = useState([]);
  const [tasksList, setTasksList] = useState([]);
  const [emplModalData, setEmplModalData] = useState(null);
  const [taskModalData, setTaskModalData] = useState(null);
  const [activeClassName, setActiveClassName] = useState(true);
  const [activeClassNameTask, setActiveClassNameTask] = useState(true);

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

  function createNewEmployee(newEmployee) {
    setActiveClassName(!activeClassName);
    setEmployeesList([...employeesList, newEmployee]);
    addDoc(collection(db, 'employees'), newEmployee);
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
    return employeesList.find((e) => e.id === id).name;
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
      }}
    >
      <Header />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      {emplModalData && <EmplModal item={emplModalData} />}
      {taskModalData && <TaskModal item={taskModalData} />}
      <Footer />
    </ApplicationProvider>
  );
}

export default App;
