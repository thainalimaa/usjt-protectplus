import React from 'react';
// import Header from '../components/Header';
import AnalyseQuiz from '../components/AnalyseQuiz';
import Footer from '../components/Footer';
import './Quiz.css';


function Quiz() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* <Header /> */}
      <AnalyseQuiz />
      <Footer />
    </div>
  );
}

export default Quiz;
