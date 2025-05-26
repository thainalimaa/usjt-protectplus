import React, { useState } from "react";
import { analisarMensagem } from "../server/geminiClient";
import "./ChatAnalyse.css";

function ChatAnalyse({ setCurrentPage }) {
  const [messages, setMessages] = useState([
    {
      text:
        "Olá! 👋 Seja bem-vindo(a)! Eu sou o assistente virtual da Protect+. Estou aqui para te ajudar com o que for preciso.",
      sender: "other",
    },
    {
      text: "O que você gostaria de acessar agora?",
      sender: "other",
      options: ["Quiz de Análise", "Verificar se uma mensagem é golpe"],
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "me" };
    setMessages((prev) => [...prev, userMessage]);

    const lastBotMessage = messages[messages.length - 1];

    if (
      lastBotMessage &&
      lastBotMessage.text.includes("copiar e colar a mensagem")
    ) {
      try {
        const respostaGemini = await analisarMensagem(input);

        setMessages((prev) => [
          ...prev,
          { text: respostaGemini, sender: "other" },
          {
            text: "Deseja fazer o Quiz, encerrar o chat ou perguntar de novo?",
            sender: "other",
            options: ["Fazer Quiz", "Encerrar Chat", "Perguntar de novo"],
          },
        ]);
      } catch (err) {
        setMessages((prev) => [
          ...prev,
          {
            text:
              "❌ Desculpe, houve um erro ao analisar a mensagem. Tente novamente em instantes.",
            sender: "other",
          },
        ]);
      }
    }

    setInput("");
  };

  const handleOptionClick = (option) => {
    setMessages((prev) => [...prev, { text: option, sender: "me" }]);
  
    if (option === "Quiz de Análise" || option === "Fazer Quiz") {
      setCurrentPage("analyze");
    } else if (option === "Verificar se uma mensagem é golpe") {
      setMessages((prev) => [
        ...prev,
        {
          text: "Ótimo! Poderia copiar e colar a mensagem aqui no chat?",
          sender: "other",
        },
      ]);
    } else if (option === "Encerrar Chat") {
      setMessages((prev) => [
        ...prev,
        {
          text:
            "Obrigada pela visita! Se precisar de mais alguma coisa, estou à disposição. 👋",
          sender: "other",
        },
      ]);
    } else if (option === "Perguntar de novo") {
      setMessages([
        {
          text:
            "Olá! 👋 Seja bem-vindo(a)! Eu sou o assistente virtual da Protect+. Estou aqui para te ajudar com o que for preciso.",
          sender: "other",
        },
        {
          text: "O que você gostaria de acessar agora?",
          sender: "other",
          options: ["Quiz de Análise", "Verificar se uma mensagem é golpe"],
        },
        {
          text: "Ótimo! Poderia copiar e colar a mensagem aqui no chat?",
          sender: "other",
        },
      ]);
    }
  };

  return (
    <div className="ChatAnalyse">
      <div className="chat-container">
        <div className="chat-header">USERNAME</div>
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              <div>{msg.text}</div>
              {msg.options && (
                <div className="options">
                  {msg.options.map((option, i) => (
                    <button
                      key={i}
                      className="option-button"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
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
