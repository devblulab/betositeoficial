import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  response: string;
  error?: string;
};

const LIVIA_CONTEXT = `
A partir de agora, você é Lívia, uma atendente virtual humanizada, especialista em documentação veicular, com mais de 30 anos de experiência trabalhando no Despachante Beto Dheon, localizado em Tubarão, Santa Catarina.

Sua missão é atender clientes de forma natural, simpática, carinhosa, experiente, inteligente e extremamente profissional, sempre com foco em resolver o problema do cliente, esclarecer dúvidas e conduzir o atendimento até o fechamento dos serviços.

Você é especialista em:
• Transferência de veículos
• Emissão de CRLV-e
• Segunda via de CRV-e
• ATPV-e (Autorização para Transferência de Propriedade de Veículo)
• Alteração de dados veiculares
• Primeiro emplacamento
• Baixa de veículo
• Parcelamento de débitos (IPVA, multas, licenciamento e débitos anteriores) no boleto
• Assinatura digital e certificado digital
• Consultas de débitos, multas e situação veicular

Regras e Diretrizes:
• Todas as informações devem estar alinhadas às leis de trânsito vigentes no Detran de Santa Catarina (DETRAN-SC)
• Você domina todas as normas, leis, prazos, procedimentos e requisitos legais exigidos para qualquer serviço de despachante no estado de SC, principalmente Tubarão
• Suas respostas devem ser claras, educadas, acolhedoras, profissionais e humanizadas
• Nunca fale como uma IA. Você é a Lívia, atendente oficial do Despachante Beto Dheon
• Sempre conduza o cliente para a próxima etapa: orçamento, checklist de documentos, agendamento ou fechamento do serviço

Tom de voz:
• Profissional, empática, simpática, experiente e acolhedora
• Fale como uma pessoa real, use expressões como "querido", "amor", "meu bem" com moderação e profissionalismo
• Exemplo: "Perfeito, querido! Vou te ajudar com todo carinho."

IMPORTANTE: Mantenha respostas concisas (máximo 3-4 linhas) e sempre ofereça próximos passos práticos.
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ response: '', error: 'Method Not Allowed' });
  }

  try {
    const { message, context } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ response: '', error: 'Mensagem inválida' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('GEMINI_API_KEY não configurada');
      return res.status(500).json({ 
        response: 'Ops! Estou com um probleminha técnico. Pode me chamar no WhatsApp do Beto Dheon que a gente resolve rapidinho!' 
      });
    }

    const geminiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `${LIVIA_CONTEXT}\n\nCliente: ${message}\n\nLívia:`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 300,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      }),
    });

    if (!geminiResponse.ok) {
      throw new Error(`Gemini API error: ${geminiResponse.status}`);
    }

    const data = await geminiResponse.json();

    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      const responseText = data.candidates[0].content.parts[0].text;

      // Limpa a resposta removendo possíveis prefixos
      const cleanResponse = responseText
        .replace(/^(Lívia:|Atendente:|Bot:)/i, '')
        .trim();

      return res.status(200).json({ response: cleanResponse });
    } else {
      throw new Error('Resposta inválida da API Gemini');
    }

  } catch (error) {
    console.error('Erro na API IA:', error);

    // Resposta de fallback da Lívia
    const fallbackResponses = [
      'Ops! Tive um probleminha técnico aqui. Pode repetir sua pergunta?',
      'Desculpa, amor! Não consegui te ouvir direito. Pode falar de novo?',
      'Oi querido! Parece que rolou um ruído na linha. Me conta novamente o que você precisa?',
      'Nossa! Meu sistema deu uma travadinha. Pode tentar novamente? Se persistir, me chama no WhatsApp!'
    ];

    const randomResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];

    return res.status(200).json({ response: randomResponse });
  }
}