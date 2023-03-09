import React from 'react';
import '../Header/header.css';

function Header() {
  return (
    <>
      <header className="header">
        <div>
          <h3>T A S K</h3>
          <h3 className="h3-black">HOLDING</h3>
        </div>
        <nav className="menu">
          <button className="header-btn">TASKS</button>
          <button className="header-btn">EMPLOYEES</button>
          <button className="header-btn-about">About.</button>
        </nav>
      </header>
    </>
  );
}

export default Header;
