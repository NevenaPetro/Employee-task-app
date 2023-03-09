import React from 'react';
import { ApplicationProvider } from './context/AplicationContext';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import EmployeesPage from './pages/EmployeesPage/EmployeesPage';
import TasksPage from './pages/TasksPage/TasksPage';
import Header from './components/Header/Header';
import AboutPage from './pages/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';

import "./app.css";

function App() {
  return (
    
      <ApplicationProvider
      //</>value={{}}
      >
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      <Footer />
      </ApplicationProvider>
    
  );
}

export default App;
