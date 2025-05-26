import React, { useState } from "react";
import "./ChatAnalyse.css";

function ChatAnalyse() {
  const [messages, setMessages] = useState([
    { text: "Olá! 👋 Seja bem-vindo(a)!Eu sou o assistente virtual da Protect+. Estou aqui para te ajudar com o que for preciso.", sender: "other" },
    { text: 
    "Você pode me perguntar sobre:\n\n" +
    "1️⃣ Quiz de Análise\n" +
    "2️⃣ Verificar se uma mensagem é golpe\n" +
    "3️⃣ Suporte técnico\n\n" +
    "É só digitar o número ou a opção desejada! 😉", sender: "other" },
    { text: "Gostaria que me ajudasse a análisar se a mensagem que recebi por e-mail é um golpe", sender: "me" },
    { text: "ótimo! Poderia copiar e colar a mensagem aqui no chat?", sender: "other" },
    { text: "Sim, claro!", sender: "me"},

  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "me" }]);
    setInput("");
  };

  return (
    <div className="ChatAnalyse">
      <div className="chat-container">
        <div className="chat-header">USERNAME</div>
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === "me" ? "me" : "other"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Mensagem..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default ChatAnalyse;
