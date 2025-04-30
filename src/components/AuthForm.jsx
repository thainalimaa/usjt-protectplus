import React, { useState } from "react";
import "./AuthForm.css";

const AuthForm = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  return (
    <div className="auth-container">
      <div className="auth-box">

        {/* Login */}
        <div className="auth-section">
          <h2 className="auth-title">Login</h2>
          <form className="auth-form">
            <input type="email" placeholder="Email" className="auth-input" />
            <input type="password" placeholder="Senha" className="auth-input" />
            <button className="auth-button">Entrar</button>
          </form>

          <div className="auth-forgot">
            <button
              onClick={() => setShowForgotPassword(!showForgotPassword)}
              className="forgot-link"
            >
              Esqueceu sua senha?
            </button>
          </div>

          {showForgotPassword && (
            <div className="forgot-form">
              <input
                type="email"
                placeholder="Digite seu email"
                className="auth-input"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
              />
              <button className="reset-button">Enviar</button>
            </div>
          )}
        </div>

        {/* Divisor */}
        <div className="auth-divider">
          <span className="divider-text">ou</span>
        </div>

        {/* Cadastro */}
        <div className="auth-section">
          <h2 className="auth-title">Criar Conta</h2>
          <form className="auth-form">
            <input type="email" placeholder="Email" className="auth-input" />
            <input type="text" placeholder="Nome completo" className="auth-input" />
            <input type="password" placeholder="Senha forte" className="auth-input" />
            <input type="text" placeholder="CPF" className="auth-input" />
            <label className="auth-label" htmlFor="signup-birthdate">Data de Nascimento</label>
            <input type="date" id="signup-birthdate" className="auth-input" />
            <button className="auth-button">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
