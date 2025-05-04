import React, { useState } from "react";
import "./AuthForm.css";

const AuthForm = ({ setCurrentPage }) => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setSuccessMessage("Cadastro realizado com sucesso! ");
  };

  const handleForgotPassword = () => {
    if (resetEmail.trim()) {
      setSuccessMessage("Um e-mail foi enviado com instruções para redefinir sua senha. ");
      setResetEmail("");
      setShowForgotPassword(false);
    }
  };

  const handleLogin = (email, password) => {
    console.log("Login tentado com:", email, password);

    if (email === "admin@admin.com" && password === "admin") {
      console.log("Login correto, indo para profile");
      setCurrentPage("profile");
    } else {
      setLoginErrorMessage("E-mail ou senha incorretos");
      setTimeout(() => {
        setLoginErrorMessage("");
      }, 4000);
    }
  };


  return (
    <div className="auth-container">
      <div className="auth-box">

        {/* Mensagem de sucesso */}
        {successMessage && (
          <div className="success-message">
            {successMessage}
            <button onClick={() => setSuccessMessage("")}>OK</button>
          </div>
        )}

        {/* Login */}
        <div className="auth-section">
          <h2 className="auth-title">Login</h2>
          <form
            className="auth-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin(email, password);
            }}
          >
            <input
              type="email"
              placeholder="Email"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="auth-button" type="submit">Entrar</button>
          </form>


          {/* Exibir mensagem de erro se houver */}
          {loginErrorMessage && (
            <div className="error-balloon">
              <span>{loginErrorMessage}</span>
            </div>
          )}

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
              <button
                className="reset-button"
                onClick={(e) => {
                  e.preventDefault();
                  handleForgotPassword();
                }}
              >
                Enviar
              </button>

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
          <form className="auth-form" onSubmit={handleRegister}>
            <label>
              Email
              <input type="email" className="auth-input" required />
            </label>

            <label>
              Nome completo
              <input type="text" className="auth-input" required />
            </label>

            <label>
              Senha forte
              <input type="password" className="auth-input" required />
            </label>

            <label>
              CPF
              <input type="text" className="auth-input" required />
            </label>

            <label>
              Data de Nascimento
              <input type="date" className="auth-input" required />
            </label>

            <button className="auth-button" type="submit">Cadastrar</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AuthForm;
