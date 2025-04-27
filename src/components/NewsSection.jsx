import React from 'react';
import './NewsSection.css';

const newsItems = [
  {
    title: "Robôs domésticos começam a ser adotados para tarefas diárias...",
    category: "ROBOTÍCA",
    image: "/path/to/robot-image.jpg"
  },
  {
    title: "Novo Smartphone Projetor 3D chega ao mercado...",
    category: "HOLOGRAMAS",
    image: "/path/to/hologram-image.jpg"
  },
  {
    title: "Tecnologia 6G chega às metrópoles brasileiras...",
    category: "INTERNET",
    image: "/path/to/6g-image.jpg"
  },
  {
    title: "Empresas lançam relógio inteligente para saúde mental...",
    category: "VESTÍVEIS",
    image: "/path/to/wearable-image.jpg"
  }
];

function NewsSection() {
  return (
    <section className="news-section">
      <h2>Notícias</h2>
      <div className="news-cards">
        {newsItems.map((item, index) => (
          <div className="news-card" key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.category}</h3>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewsSection;
