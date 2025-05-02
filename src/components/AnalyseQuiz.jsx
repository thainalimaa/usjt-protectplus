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
    let score = 0;

    for (let answer of Object.values(answers)) {
      if (answer === "Sim") score++;
    }

    if (score > Object.values(answers).length / 2) {
      setFinalResult("A mensagem tem altas chances de ser um golpe.");
    } else {
      setFinalResult("Provavelmente é uma mensagem legítima, mas vale sempre verificar.");
    }
  };

  return (
    <div className="quiz-container">
      <h2>Quiz: Identificando Mensagens de Golpe</h2>

      {step === 1 && (
        <div>
          <h3>1. Qual é o tipo de mensagem que você recebeu?</h3>
          <button onClick={() => {handleAnswer('type', 'WhatsApp'); setStep(2)}}>WhatsApp</button>
          <button onClick={() => {handleAnswer('type', 'E-mail'); setStep(10)}}>E-mail</button>
          <button onClick={() => {handleAnswer('type', 'SMS'); setStep(18)}}>SMS</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3>2. A mensagem tem o selo de verificação verde no número do remetente?</h3>
          <button onClick={() => {handleAnswer('whatsapp1', 'Sim'); handleNextStep()}}>Sim</button>
          <button onClick={() => {handleAnswer('whatsapp1', 'Não'); handleNextStep()}}>Não</button>
          <button onClick={() => {handleAnswer('whatsapp1', 'Não sei'); handleNextStep()}}>Não sei</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3>3. O número do remetente é desconhecido ou parece ser um número aleatório?</h3>
          <button onClick={() => {handleAnswer('whatsapp2', 'Sim, é desconhecido'); handleNextStep()}}>Sim, é desconhecido</button>
          <button onClick={() => {handleAnswer('whatsapp2', 'Não, é um número conhecido'); handleNextStep()}}>Não, é um número conhecido</button>
          <button onClick={() => {handleAnswer('whatsapp2', 'Não sei'); handleNextStep()}}>Não sei</button>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3>4. A mensagem pede informações sensíveis, como senhas ou códigos de segurança?</h3>
          <button onClick={() => {handleAnswer('whatsapp3', 'Sim'); handleNextStep()}}>Sim</button>
          <button onClick={() => {handleAnswer('whatsapp3', 'Não'); handleNextStep()}}>Não</button>
          <button onClick={() => {handleAnswer('whatsapp3', 'Não sei'); handleNextStep()}}>Não sei</button>
        </div>
      )}

      {step === 5 && (
        <div>
          <h3>5. O link na mensagem redireciona para um site suspeito ou desconhecido?</h3>
          <button onClick={() => {handleAnswer('whatsapp4', 'Sim'); handleNextStep()}}>Sim</button>
          <button onClick={() => {handleAnswer('whatsapp4', 'Não'); handleNextStep()}}>Não</button>
          <button onClick={() => {handleAnswer('whatsapp4', 'Não sei'); handleNextStep()}}>Não sei</button>
        </div>
      )}

      {step === 6 && (
        <div>
          <h3>6. A mensagem contém erros de digitação ou gramática?</h3>
          <button onClick={() => {handleAnswer('whatsapp5', 'Sim, muitos erros'); handleNextStep()}}>Sim, muitos erros</button>
          <button onClick={() => {handleAnswer('whatsapp5', 'Não, está bem escrita'); handleNextStep()}}>Não, está bem escrita</button>
          <button onClick={() => {handleAnswer('whatsapp5', 'Não sei'); handleNextStep()}}>Não sei</button>
        </div>
      )}

      {/* E-mail questions */}
      {step === 10 && (
        <div>
          <h3>2. O endereço de e-mail do remetente é oficial do banco ou da empresa?</h3>
          <button onClick={() => {handleAnswer('email1', 'Sim, é oficial'); handleNextStep()}}>Sim, é oficial</button>
          <button onClick={() => {handleAnswer('email1', 'Não, é suspeito'); handleNextStep()}}>Não, é suspeito</button>
          <button onClick={() => {handleAnswer('email1', 'Não sei'); handleNextStep()}}>Não sei</button>
        </div>
      )}

      {step === 11 && (
        <div>
          <h3>3. A mensagem pede para você clicar em links para atualizar informações bancárias ou fazer login?</h3>
          <button onClick={() => {handleAnswer('email2', 'Sim'); handleNextStep()}}>Sim</button>
          <button onClick={() => {handleAnswer('email2', 'Não'); handleNextStep()}}>Não</button>
          <button onClick={() => {handleAnswer('email2', 'Não sei'); handleNextStep()}}>Não sei</button>
        </div>
      )}

      {step === 12 && (
        <div>
          <h3>4. O e-mail tem um tom de urgência ou ameaça, como "Ação necessária imediatamente"?</h3>
          <button onClick={() => {handleAnswer('email3', 'Sim, é urgente'); handleNextStep()}}>Sim, é urgente</button>
          <button onClick={() => {handleAnswer('email3', 'Não, está tranquilo'); handleNextStep()}}>Não, está tranquilo</button>
          <button onClick={() => {handleAnswer('email3', 'Não sei'); handleNextStep()}}>Não sei</button>
        </div>
      )}

      {step === 13 && (
        <div>
          <h3>5. Há anexos na mensagem? Você esperava algum anexo?</h3>
          <button onClick={() => {handleAnswer('email4', 'Sim, e eu não esperava'); handleNextStep()}}>Sim, e eu não esperava</button>
          <button onClick={() => {handleAnswer('email4', 'Não, não tem anexos'); handleNextStep()}}>Não, não tem anexos</button>
          <button onClick={() => {handleAnswer('email4', 'Não sei'); handleNextStep()}}>Não sei</button>
        </div>
      )}

      {step === 14 && (
        <div>
          <h3>6. O e-mail contém erros de formatação ou ortografia?</h3>
          <button onClick={() => {handleAnswer('email5', 'Sim, muitos erros'); handleNextStep()}}>Sim, muitos erros</button>
          <button onClick={() => {handleAnswer('email5', 'Não, está bem escrito'); handleNextStep()}}>Não, está bem escrito</button>
          <button onClick={() => {handleAnswer('email5', 'Não sei'); handleNextStep()}}>Não sei</button>
        </div>
      )}

      {/* SMS questions */}
      {step === 18 && (
        <div>
          <h3>2. O número do remetente parece ser uma linha comum ou é um número de telefone suspeito?</h3>
          <button onClick={() => {handleAnswer('sms1', 'É um número suspeito'); handleNextStep()}}>É um número suspeito</button>
          <button onClick={() => {handleAnswer('sms1', 'É um número comum e conhecido'); handleNextStep()}}>É um número comum e conhecido</button>
          <button onClick={() => {handleAnswer('sms1', 'Não sei'); handleNextStep()}}>Não sei</button>
        </div>
      )}

      {step === 19 && (
        <div>
          <h3>3. A mensagem solicita que você ligue para um número suspeito ou forneça dados pessoais?</h3>
          <button onClick={() => {handleAnswer('sms2', 'Sim, pede dados pessoais'); handleNextStep()}}>Sim, pede dados pessoais</button>
          <button onClick={() => {handleAnswer('sms2', 'Não, não pede dados pessoais'); handleNextStep()}}>Não, não pede dados pessoais</button>
          <button onClick={() => {handleAnswer('sms2', 'Não sei'); handleNextStep()}}>Não sei</button>
        </div>
      )}

      {step === 20 && (
        <div>
          <h3>4. A mensagem contém um código de segurança ou um link que você não solicitou?</h3>
          <button onClick={() => {handleAnswer('sms3', 'Sim, recebi um código que eu não pedi'); handleNextStep()}}>Sim, recebi um código</button>
          <button onClick={() => {handleAnswer('sms3', 'Não, a mensagem não contém código ou link suspeito'); handleNextStep()}}>Não, não contém código ou link</button>
          <button onClick={() => {handleAnswer('sms3', 'Não sei'); handleNextStep()}}>Não sei</button>
        </div>
      )}

      {step === 21 && (
        <div>
          <h3>5. A mensagem menciona um valor ou conta bancária que você não reconhece?</h3>
          <button onClick={() => {handleAnswer('sms4', 'Sim, mencionaram algo que eu não reconheço'); handleNextStep()}}>Sim, mencionaram algo desconhecido</button>
          <button onClick={() => {handleAnswer('sms4', 'Não, a mensagem não menciona valores desconhecidos'); handleNextStep()}}>Não, não menciona valores desconhecidos</button>
          <button onClick={() => {handleAnswer('sms4', 'Não sei'); handleNextStep()}}>Não sei</button>
        </div>
      )}

      {step === 22 && (
        <div>
          <h3>6. A mensagem contém erros de digitação ou de formatação?</h3>
          <button onClick={() => {handleAnswer('sms5', 'Sim, tem erros'); handleNextStep()}}>Sim, tem erros</button>
          <button onClick={() => {handleAnswer('sms5', 'Não, está bem escrita'); handleNextStep()}}>Não, está bem escrita</button>
          <button onClick={() => {handleAnswer('sms5', 'Não sei'); handleFinishQuiz()}}>Não sei</button>
        </div>
      )}

      {finalResult && (
        <div className="result">
          <h3>Resultado</h3>
          <p>{finalResult}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
