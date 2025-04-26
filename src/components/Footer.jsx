import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <hr />
      <p>PROTECT+</p>
      <ul>
        <li>Sobre</li>
        <li>Notícias</li>
        <li>Verifique agora</li>
        <li>Login</li>
      </ul>
      <div className="footer-links">
        <a href="/terms">Terms & Conditions</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
