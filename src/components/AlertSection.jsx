import React from 'react';
import './AlertSection.css';

function AlertSection() {
  return (
    <section className="alert-section">
      <div className="alert-message">
        <h2>⚠️ Golpistas estão cada vez mais espertos. Você pode estar também.</h2>
        <p>Recebeu uma mensagem estranha?</p>
        <p>Responda algumas perguntas simples e veja se está lidando com um golpe.</p>
        <button className="verify-button">Verificar agora</button>
      </div>
      <div className="illustration">
        <img src="src/assets/golpe-illustration.png" alt="Alert Illustration" />
      </div>
    </section>
  );
}

export default AlertSection;
