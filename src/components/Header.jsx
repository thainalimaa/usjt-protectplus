import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

function Header({ setCurrentPage }) {
  return (
    <header className="header">
      <div className="illustration-logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <nav>
        <ul>
          <li>
            <button className="nav-btn" onClick={() => setCurrentPage("home")}>
              HOME
            </button>
          </li>
          <li>
            <button className="nav-btn" onClick={() => setCurrentPage("login")}>
              LOGIN
            </button>
          </li>
          <li>
            <button className="nav-btn" onClick={() => setCurrentPage("analyze")}>
              QUIZ DE ANÁLISE
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
