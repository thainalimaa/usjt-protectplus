import React from 'react';
import AlertSection from '../components/AlertSection';
import NewsSection from '../components/NewsSection';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <main className="main-content">
        <NewsSection />
      </main>
    </div>
  );
}

export default Home;
