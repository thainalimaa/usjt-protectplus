import React from 'react';
import './NewsSection.css';
import Imagem1 from '../assets/Imagem_1.png';
import Imagem2 from '../assets/Imagem_2.png';
import Imagem3 from '../assets/Imagem_3.png';
import Imagem4 from '../assets/Imagem_4.png';



const newsItems = [
  {
    title: "Experimento hipotético prevê avaliar se uma máquina pode exibir comportamento inteligente equivalente ao de um ser humano",
    category: "Estudo mostra qual IA consegue enganar teste e se passar por humano",
    image: Imagem1,
    link: "https://www.cnnbrasil.com.br/tecnologia/estudo-mostra-qual-ia-consegue-enganar-teste-e-se-passar-por-humano/"
  },

  {
    title: "Mesmo que o senso comum aponte que os mais vulneráveis estariam mais expostos a golpes virtuais, especialmente os idosos, as pesquisas não comprovam isso. Clique aqui e saiba mais!",
    category: "Golpes virtuais aumentam e nao fazem distinção de idade",
    image: Imagem2,
    link: "https://www12.senado.leg.br/noticias/infomaterias/2025/04/golpes-virtuais-aumentam-e-nao-fazem-distincao-de-idade"
  },
  {
    title: "Os golpes digitais vitimaram 24% dos brasileiros com mais de 16 anos nos últimos 12 meses. São mais de 40,85 milhões de pessoas que perderam dinheiro em função de algum crime cibernético, como clonagem de cartão, fraude na internet ou invasão de contas bancárias.",
    category: "Golpes digitais atingem 24% da população brasileira, revela DataSenado",
    image: Imagem3,
    link: "https://www12.senado.leg.br/noticias/materias/2024/10/01/golpes-digitais-atingem-24-da-populacao-brasileira-revela-datasenado"
  },

  {
    title: "O número de crimes digitais praticados neste ano, no Brasil, cresceu 45% em relação ao ano anterior, somando cerca de 5 milhões de fraudes praticadas.",
    category: "Número de golpes digitais aumenta em quase 50% em 2024",
    image: Imagem4,
    link: "https://veja.abril.com.br/coluna/radar/numero-de-golpes-digitais-aumenta-em-quase-50-em-2024/#google_vignette"
  }
];

function NewsSection() {
  return (
    <section className="news-section">
      <h2>Notícias</h2>
      <div className="news-cards">
        {newsItems.map((item, index) => (
          <a href={item.link} key={index} className="news-card">
            <div className="news-image-container">
              <img
                src={item.image || "/path/to/default-image.jpg"}
                alt={`Imagem da notícia sobre ${item.category}`}
              />
            </div>
            <div className="news-content">
              <h3>{item.category}</h3>
              <p>{item.title}</p>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}

export default NewsSection;
