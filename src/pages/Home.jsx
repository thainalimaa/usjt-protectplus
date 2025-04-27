import React from 'react';
import Header from '../components/Header';
import AlertSection from '../components/AlertSection';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <AlertSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
