import React from 'react';
import '../Header/header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className="header">
        <div>
          <Link to="/">
            <h3>T A S K</h3>
            <h3 className="h3-black">HOLDING</h3>
          </Link>
        </div>
        <nav className="menu">
          <Link to="/tasks">
            <button className="header-btn">TASKS</button>
          </Link>
          <Link to="/employees">
            <button className="header-btn">EMPLOYEES</button>
          </Link>
          <Link to="/projects">
            <button className="header-btn">PROJECTS</button>
          </Link>
          <Link to="/about">
            <button className="header-btn-about">About.</button>
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
