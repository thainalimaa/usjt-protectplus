import React from 'react';
import AnalyseQuiz from '../components/AnalyseQuiz';
import Footer from '../components/Footer';
import './Quiz.css';


function Quiz() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <AnalyseQuiz />
      <Footer />
    </div>
  );
}

export default Quiz;
