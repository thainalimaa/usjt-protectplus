import React from 'react';
import Header from '../components/Header';
import AnalyseQuiz from '../components/AnalyseQuiz';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <AnalyseQuiz />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
