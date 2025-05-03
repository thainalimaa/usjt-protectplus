import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './TermsConditions.css';

function TermsConditions() {
  return (
    <>
      <Header />
      <main className="TermsConditions-container">
        <h1>Termos e Condições de Uso</h1>

        <h2>Aceitação dos Termos</h2>
        <p>Ao acessar e utilizar este site, o usuário concorda com os presentes Termos e Condições de Uso. Caso não concorde com qualquer parte destes termos, não utilize o site.</p>

        <h2>Finalidade da Plataforma</h2>
        <p>Este site tem como objetivo ajudar os usuários a identificarem possíveis golpes em mensagens de texto, e-mail ou aplicativos. A ferramenta oferece uma análise automatizada com base em padrões conhecidos de golpes, visando aumentar a segurança digital dos usuários.</p>

        <h2>Natureza Informativa do Serviço</h2>
        <p>As análises fornecidas têm caráter meramente informativo e preventivo. Não garantimos com 100% de certeza que uma mensagem seja verdadeira ou fraudulenta. A decisão final sobre confiar ou não em uma mensagem é de responsabilidade do usuário.</p>

        <h2>Privacidade e Segurança</h2>
        <p>As mensagens submetidas à análise não são armazenadas, compartilhadas ou associadas a dados pessoais. A confidencialidade do conteúdo analisado é respeitada, exceto se houver exigência legal para fornecimento de informações.

</p>

        <h2>Uso Adequado da Plataforma</h2>
        <p>É proibido o uso da ferramenta para:

Enviar spam ou conteúdos maliciosos propositalmente;

Tentar enganar ou sabotar o sistema;

Compartilhar mensagens que contenham dados sensíveis de terceiros sem autorização.

A violação dessas regras pode acarretar em bloqueio do acesso e denúncias às autoridades competentes.</p>

        <h2>Limitação de Responsabilidade</h2>
        <p>A plataforma se isenta de responsabilidade por decisões tomadas com base nas análises fornecidas. A ferramenta é um apoio, não substitui o bom senso, a verificação junto a canais oficiais ou autoridades policiais.

</p>

        <h2>Atualizações e Melhorias</h2>
        <p>A plataforma pode ser modificada ou atualizada a qualquer momento para melhorar sua eficácia ou adaptar-se a novas formas de golpes. Tais mudanças podem ocorrer sem aviso prévio.

</p>

        <h2>Direitos Autorais</h2>
        <p>Todo o conteúdo da plataforma, incluindo textos, interface, marca e código-fonte, é protegido por direitos autorais e pertence exclusivamente aos seus criadores.

</p>

        <h2>Disponibilidade do Serviço</h2>
        <p>Nos esforçamos para manter a plataforma disponível e funcionando corretamente, mas não garantimos disponibilidade contínua ou isenta de falhas. A qualquer momento, o serviço pode passar por manutenções, atualizações ou interrupções técnicas. Eventuais instabilidades não geram direito a indenizações.</p>

        <h2>Legislação Aplicável</h2>
        <p>Este site opera conforme as leis brasileiras. Em caso de disputas, o foro da comarca dos responsáveis legais pelo projeto será o competente para julgar a questão.

</p>
      </main>
      <Footer />
    </>
  );
}

export default TermsConditions;
