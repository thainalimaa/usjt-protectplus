import React from 'react';
import AlertSection from '../components/AlertSection';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <main className="main-content">
        <AlertSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
