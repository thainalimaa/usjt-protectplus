import React, { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Header from "./components/Header";
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "login":
        return <Login />;
      case "analyze":
        return <Quiz />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {/* O Header será renderizado uma vez, acima do conteúdo */}
      <Header setCurrentPage={setCurrentPage} />
      {/* Renderiza o conteúdo da página de acordo com currentPage */}
      {renderPage()}
    </div>
  );
}

export default App;
