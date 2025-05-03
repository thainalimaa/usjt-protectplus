import React from 'react';
import './Footer.css';

function Footer({ setCurrentPage }) {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-logo">PROTECT+</h2>
        <div className="footer-links">
          <button className="footer-link" onClick={() => setCurrentPage("terms")}>
            Terms & Conditions
          </button>
          <span className="footer-separator">|</span>
          <button className="footer-link" onClick={() => setCurrentPage("privacy")}>
            Privacy Policy
          </button>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p className="footer-copy">© 2025 PROTECT+. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
