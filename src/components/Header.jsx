import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="illustration">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <nav>
        <ul>
          <li><button className="nav-btn">HOME</button></li>
          <li><button className="nav-btn">LOGIN</button></li>
          <li><button className="nav-btn">ANALISE SUA MENSAGEM</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
