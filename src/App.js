import React from 'react';
import { ApplicationProvider } from './context/AplicationContext';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
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
  const [employeeId, setEmployeeId] = useState(1);
  const [taskId, setTaskId] = useState(1);
  const [emplModalData, setEmplModalData] = useState(null);
  const [taskModalData, setTaskModalData] = useState(null);

  function deleteEmployee(item) {
    employeesList.find((e) => e.id === item.id).deleted = true;
    setEmployeesList([...employeesList]);
  }
  function updateEmployee(item) {
    let deferenceList = employeesList.filter((e) => e.id !== item.id);
    setEmployeesList([...deferenceList, item]);
  }
  function deleteTask(item) {
    tasksList.find((e) => e.id === item.id).deleted = true;
    setTasksList([...tasksList]);
  }
  function updateTask(item) {
    let deferenceList = tasksList.filter((e) => e.id !== item.id);
    setTasksList([...deferenceList, item]);
  }

  return (
    <ApplicationProvider
      value={{
        employeesList,
        setEmployeesList,
        tasksList,
        setTasksList,
        employeeId,
        setEmployeeId,
        deleteEmployee,
        updateEmployee,
        setEmplModalData,
        taskId,
        setTaskId,
        deleteTask,
        setTaskModalData,
        updateTask,
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
