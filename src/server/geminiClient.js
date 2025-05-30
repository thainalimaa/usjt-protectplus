import axios from "axios";

const API_KEY = "";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

export async function analisarMensagem(mensagem) {
  const prompt = `Recebi essa mensagem do meu banco. É golpe? Preciso que a resposta seja curta, objetiva e clara. Segue a mensagem:\n\n${mensagem}`;

  const body = {
    contents: [
      {
        parts: [{ text: prompt }]
      }
    ]
  };

  try {
    const response = await axios.post(API_URL, body, {
      headers: { 'Content-Type': 'application/json' }
    });

    const resposta = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return resposta || 'Sem resposta útil.';
  } catch (err) {
    console.error('Erro ao consultar o Gemini:', err);
    return 'Erro ao consultar o Gemini.';
  }
}
