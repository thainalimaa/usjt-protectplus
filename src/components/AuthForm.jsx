import React, { useState } from "react";
import "./AuthForm.css";

const AuthForm = ({ setCurrentPage }) => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [registerErrorMessage, setRegisterErrorMessage] = useState(""); // NOVO estado para erro registro
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleRegister = async (e) => {
  e.preventDefault();

  const form = e.target;
  const email = form[0].value;
  const nome_completo = form[1].value;
  const senha = form[2].value;
  const cpf = form[3].value;
  const data_nascimento = form[4].value;

  try {
    const res = await fetch("http://localhost:8086/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, nome_completo, senha, cpf, data_nascimento }),
    });

    const data = await res.json();

    if (res.ok) {
      setSuccessMessage(data.message);
      setRegisterErrorMessage("");
      form.reset();
    } else {
      if (
        data.message &&
        typeof data.message === "string" &&
        data.message.toLowerCase().includes("duplicate")
      ) {
        setRegisterErrorMessage("E-mail já cadastrado.");
      } else {
        const data = await res.json();
        console.log("📬 Conteúdo da resposta:", data);

        setRegisterErrorMessage("Erro no cadastro.");
      }
      setSuccessMessage("");
    }
  } catch (err) {
    setRegisterErrorMessage("Erro ao se conectar ao servidor.");
    setSuccessMessage("");
  }
};

  const handleForgotPassword = () => {
    if (resetEmail.trim()) {
      setSuccessMessage("Um e-mail foi enviado com instruções para redefinir sua senha. ");
      setResetEmail("");
      setShowForgotPassword(false);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch("http://localhost:8086/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha: password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login bem-sucedido!");
        localStorage.setItem("userEmail", email);
        setCurrentPage("profile");
      } else {
        setLoginErrorMessage(data.message || "Erro ao fazer login");
        setTimeout(() => setLoginErrorMessage(""), 4000);
      }
    } catch (error) {
      console.error("Erro ao conectar com o servidor:", error);
      setLoginErrorMessage("Erro ao conectar com o servidor");
      setTimeout(() => setLoginErrorMessage(""), 4000);
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

          {/* Mensagem de erro de registro */}
          {registerErrorMessage && (
            <div className="error-balloon">
              <span>{registerErrorMessage}</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AuthForm;
