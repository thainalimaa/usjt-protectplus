import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-logo">PROTECT+</h2>
        </div>

        <div className="footer-right">
          <p className="footer-menus">
            Sobre | Notícias | Verifique agora | Login ou Cadastro
          </p>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="/terms">Terms & Conditions</a>
          <span className="footer-separator"> | </span>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <p className="footer-copy">© 2025 PROTECT+. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
