import React, { useState } from "react";
import "./AnalyseQuiz.css";

const Quiz = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [finalResult, setFinalResult] = useState("");

  const handleAnswer = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleFinishQuiz = () => {
    const type = answers.type;
  
    const respostaList = Object.entries(answers)
      .filter(([key]) => key !== "type")
      .map(([, value]) => value);
  
    // Normaliza as respostas para três categorias: Sim, Nao, Nao sei
    const contagem = { Sim: 0, Nao: 0, "Não sei": 0 };
  
    respostaList.forEach((res) => {
      if (res.includes("Sim")) contagem.Sim += 1;
      else if (
        res.includes("Não") ||
        res.includes("Não, está bem escrita") ||
        res.includes("Não, não tem anexos") ||
        res.includes("Não, não pede dados pessoais") ||
        res.includes("Não, não contém código ou link") ||
        res.includes("Não, não menciona valores desconhecidos") ||
        res.includes("Não, está tranquilo") ||
        res.includes("Não, é um número conhecido") ||
        res.includes("Não, é oficial")
      ) contagem.Nao += 1;
      else contagem["Não sei"] += 1;
    });
  
    // Verifica qual categoria tem mais votos
    const maiorCategoria = Object.entries(contagem).sort((a, b) => b[1] - a[1])[0][0];
  
    let resultMessage = "";
  
    if (type === "WhatsApp") {
      if (maiorCategoria === "Sim") {
        resultMessage = `Você está sendo alvo de golpe!
  
  Por favor, caso forneça seus dados, entre em contato com seu banco, faça imediatamente um boletim de ocorrência em https://www.delegaciavirtual.sp.gov.br.`;
      } else if (maiorCategoria === "Nao") {
        resultMessage = `Essa mensagem aparenta ser legítima e provavelmente foi enviada pelo seu banco.
  Ela segue os padrões típicos de comunicação de instituições financeiras. Mesmo assim, por segurança, evite clicar em links e acesse seu banco diretamente pelo aplicativo ou site oficial.`;
      } else {
        resultMessage = `Não conseguimos identificar o golpe com base nas suas respostas, por favor entrar em contato com seu banco!`;
      }
    } else if (type === "E-mail") {
      if (maiorCategoria === "Sim") {
        resultMessage = `Você está sendo alvo de golpe!
  
  Faça imediatamente um boletim de ocorrência em https://www.delegaciavirtual.sp.gov.br, não entre em contato mais com o golpista.`;
      } else if (maiorCategoria === "Nao") {
        resultMessage = `Essa mensagem aparenta ser legítima e provavelmente foi enviada pelo seu banco.
  Ela segue os padrões típicos de comunicação de instituições financeiras. Mesmo assim, por segurança, evite clicar em links e acesse seu banco diretamente pelo aplicativo ou site oficial.`;
      } else {
        resultMessage = `Não identificamos se o email é um golpe, entre em contato com seu banco ou vá presencialmente para mais informações.`;
      }
    } else if (type === "SMS") {
      if (maiorCategoria === "Sim") {
        resultMessage = `Esses SMS são provavelmente de um golpista!
  
  Por favor bloqueie o SMS. Para mais informações entre em contato com seu banco ou vá presencialmente a seu banco para mais informações.`;
      } else if (maiorCategoria === "Nao") {
        resultMessage = `Essa mensagem aparenta ser legítima e provavelmente foi enviada pelo seu banco.
  Ela segue os padrões típicos de comunicação de instituições financeiras. Mesmo assim, por segurança, evite clicar em links e acesse seu banco diretamente pelo aplicativo ou site oficial.`;
      } else {
        resultMessage = `Não conseguimos identificar se esse SMS é golpe, por favor entre em contato com seu banco para mais informações!`;
      }
    }
  
    setFinalResult(resultMessage);
  };
  

  const handleRestart = () => {
    setStep(1);
    setAnswers({});
    setFinalResult("");
  };

  return (
    <div className="quiz">
      <div className="quiz-container">
        <h2>Quiz: Identificando Mensagens de Golpe</h2>

        {!finalResult && (
          <>
            {step === 1 && (
              <div>
                <h3>1. Qual é o tipo de mensagem que você recebeu?</h3>
                <button onClick={() => { handleAnswer('type', 'WhatsApp'); setStep(2) }}>WhatsApp</button>
                <button onClick={() => { handleAnswer('type', 'E-mail'); setStep(10) }}>E-mail</button>
                <button onClick={() => { handleAnswer('type', 'SMS'); setStep(18) }}>SMS</button>
              </div>
            )}

            {/* WhatsApp */}
            {step === 2 && (
              <div>
                <h3>2. A mensagem tem o selo de verificação verde no número do remetente?</h3>
                <button onClick={() => { handleAnswer('whatsapp1', 'Sim'); handleNextStep() }}>Sim</button>
                <button onClick={() => { handleAnswer('whatsapp1', 'Não'); handleNextStep() }}>Não</button>
                <button onClick={() => { handleAnswer('whatsapp1', 'Não sei'); handleNextStep() }}>Não sei</button>
              </div>
            )}
            {step === 3 && (
              <div>
                <h3>3. O número do remetente é desconhecido ou parece ser um número aleatório?</h3>
                <button onClick={() => { handleAnswer('whatsapp2', 'Sim, é desconhecido'); handleNextStep() }}>Sim, é desconhecido</button>
                <button onClick={() => { handleAnswer('whatsapp2', 'Não, é um número conhecido'); handleNextStep() }}>Não, é um número conhecido</button>
                <button onClick={() => { handleAnswer('whatsapp2', 'Não sei'); handleNextStep() }}>Não sei</button>
              </div>
            )}
            {step === 4 && (
              <div>
                <h3>4. A mensagem pede informações sensíveis, como senhas ou códigos de segurança?</h3>
                <button onClick={() => { handleAnswer('whatsapp3', 'Sim'); handleNextStep() }}>Sim</button>
                <button onClick={() => { handleAnswer('whatsapp3', 'Não'); handleNextStep() }}>Não</button>
                <button onClick={() => { handleAnswer('whatsapp3', 'Não sei'); handleNextStep() }}>Não sei</button>
              </div>
            )}
            {step === 5 && (
              <div>
                <h3>5. O link na mensagem redireciona para um site suspeito ou desconhecido?</h3>
                <button onClick={() => { handleAnswer('whatsapp4', 'Sim'); handleNextStep() }}>Sim</button>
                <button onClick={() => { handleAnswer('whatsapp4', 'Não'); handleNextStep() }}>Não</button>
                <button onClick={() => { handleAnswer('whatsapp4', 'Não sei'); handleNextStep() }}>Não sei</button>
              </div>
            )}
            {step === 6 && (
              <div>
                <h3>6. A mensagem contém erros de digitação ou gramática?</h3>
                <button onClick={() => { handleAnswer('whatsapp5', 'Sim, muitos erros'); handleFinishQuiz() }}>Sim, muitos erros</button>
                <button onClick={() => { handleAnswer('whatsapp5', 'Não, está bem escrita'); handleFinishQuiz() }}>Não, está bem escrita</button>
                <button onClick={() => { handleAnswer('whatsapp5', 'Não sei'); handleFinishQuiz() }}>Não sei</button>
              </div>
            )}

            {/* E-mail */}
            {step === 10 && (
              <div>
                <h3>2. O endereço de e-mail do remetente é oficial do banco ou da empresa?</h3>
                <button onClick={() => { handleAnswer('email1', 'Sim, é oficial'); handleNextStep() }}>Sim, é oficial</button>
                <button onClick={() => { handleAnswer('email1', 'Não, é suspeito'); handleNextStep() }}>Não, é suspeito</button>
                <button onClick={() => { handleAnswer('email1', 'Não sei'); handleNextStep() }}>Não sei</button>
              </div>
            )}
            {step === 11 && (
              <div>
                <h3>3. A mensagem pede para você clicar em links para atualizar informações bancárias ou fazer login?</h3>
                <button onClick={() => { handleAnswer('email2', 'Sim'); handleNextStep() }}>Sim</button>
                <button onClick={() => { handleAnswer('email2', 'Não'); handleNextStep() }}>Não</button>
                <button onClick={() => { handleAnswer('email2', 'Não sei'); handleNextStep() }}>Não sei</button>
              </div>
            )}
            {step === 12 && (
              <div>
                <h3>4. O e-mail tem um tom de urgência ou ameaça?</h3>
                <button onClick={() => { handleAnswer('email3', 'Sim, é urgente'); handleNextStep() }}>Sim, é urgente</button>
                <button onClick={() => { handleAnswer('email3', 'Não, está tranquilo'); handleNextStep() }}>Não, está tranquilo</button>
                <button onClick={() => { handleAnswer('email3', 'Não sei'); handleNextStep() }}>Não sei</button>
              </div>
            )}
            {step === 13 && (
              <div>
                <h3>5. Há anexos na mensagem? Você esperava algum anexo?</h3>
                <button onClick={() => { handleAnswer('email4', 'Sim, e eu não esperava'); handleNextStep() }}>Sim, e eu não esperava</button>
                <button onClick={() => { handleAnswer('email4', 'Não, não tem anexos'); handleNextStep() }}>Não, não tem anexos</button>
                <button onClick={() => { handleAnswer('email4', 'Não sei'); handleNextStep() }}>Não sei</button>
              </div>
            )}
            {step === 14 && (
              <div>
                <h3>6. O e-mail contém erros de formatação ou ortografia?</h3>
                <button onClick={() => { handleAnswer('email5', 'Sim, muitos erros'); handleFinishQuiz() }}>Sim, muitos erros</button>
                <button onClick={() => { handleAnswer('email5', 'Não, está bem escrito'); handleFinishQuiz() }}>Não, está bem escrito</button>
                <button onClick={() => { handleAnswer('email5', 'Não sei'); handleFinishQuiz() }}>Não sei</button>
              </div>
            )}

            {/* SMS */}
            {step === 18 && (
              <div>
                <h3>2. O número do remetente parece ser suspeito?</h3>
                <button onClick={() => { handleAnswer('sms1', 'É um número suspeito'); handleNextStep() }}>É um número suspeito</button>
                <button onClick={() => { handleAnswer('sms1', 'É um número comum e conhecido'); handleNextStep() }}>É um número comum e conhecido</button>
                <button onClick={() => { handleAnswer('sms1', 'Não sei'); handleNextStep() }}>Não sei</button>
              </div>
            )}
            {step === 19 && (
              <div>
                <h3>3. A mensagem solicita que você forneça dados pessoais?</h3>
                <button onClick={() => { handleAnswer('sms2', 'Sim, pede dados pessoais'); handleNextStep() }}>Sim, pede dados pessoais</button>
                <button onClick={() => { handleAnswer('sms2', 'Não, não pede dados pessoais'); handleNextStep() }}>Não, não pede dados pessoais</button>
                <button onClick={() => { handleAnswer('sms2', 'Não sei'); handleNextStep() }}>Não sei</button>
              </div>
            )}
            {step === 20 && (
              <div>
                <h3>4. Contém código ou link que você não solicitou?</h3>
                <button onClick={() => { handleAnswer('sms3', 'Sim, recebi um código que eu não pedi'); handleNextStep() }}>Sim, recebi um código</button>
                <button onClick={() => { handleAnswer('sms3', 'Não, não contém código ou link suspeito'); handleNextStep() }}>Não, não contém código ou link</button>
                <button onClick={() => { handleAnswer('sms3', 'Não sei'); handleNextStep() }}>Não sei</button>
              </div>
            )}
            {step === 21 && (
              <div>
                <h3>5. Menciona valor ou conta que você não reconhece?</h3>
                <button onClick={() => { handleAnswer('sms4', 'Sim, mencionaram algo que eu não reconheço'); handleNextStep() }}>Sim</button>
                <button onClick={() => { handleAnswer('sms4', 'Não, não menciona valores desconhecidos'); handleNextStep() }}>Não</button>
                <button onClick={() => { handleAnswer('sms4', 'Não sei'); handleNextStep() }}>Não sei</button>
              </div>
            )}
            {step === 22 && (
              <div>
                <h3>6. A mensagem contém erros de digitação ou de formatação?</h3>
                <button onClick={() => { handleAnswer('sms5', 'Sim, tem erros'); handleFinishQuiz() }}>Sim, tem erros</button>
                <button onClick={() => { handleAnswer('sms5', 'Não, está bem escrita'); handleFinishQuiz() }}>Não, está bem escrita</button>
                <button onClick={() => { handleAnswer('sms5', 'Não sei'); handleFinishQuiz() }}>Não sei</button>
              </div>
            )}
          </>
        )}

        {finalResult && (
          <div className="result">
            <h3>Resultado</h3>
            <p>{finalResult}</p>
            <button onClick={handleRestart}>Refazer quiz</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
