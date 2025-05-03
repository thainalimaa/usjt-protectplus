import React, { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile"; 
import Quiz from "./pages/Quiz";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Terms from "./pages/Terms";
import AlertSection from "./components/AlertSection";
import Privacy from "./pages/Privacy";
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <AlertSection setCurrentPage={setCurrentPage} />
            <Home />
          </>
        );
      case "login":
        return <Login/>;
      case "profile":
        return <Profile />;
      case "analyze":
        return <Quiz />;
      case "terms":
        return <Terms />;
      case "privacy":
        return <Privacy />;
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
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
