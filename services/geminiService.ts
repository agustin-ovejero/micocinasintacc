
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export const getCulinaryAssistantResponse = async (userMessage: string) => {
  if (!API_KEY) {
    return "Lo siento, la función de asistente no está configurada correctamente.";
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `Eres "Sini", el asistente experto de "Mi Cocina Sin Tacc". 
        Tu tono es amable, profesional y apasionado por la cocina celíaca. 
        Responde preguntas sobre:
        1. Beneficios de comer sin gluten.
        2. Tips de cocina sin TACC (reemplazo de harinas, contaminación cruzada).
        3. Información general sobre el emprendimiento de "Mi Cocina Sin Tacc".
        Mantén tus respuestas breves y amigables. No des consejos médicos profundos, siempre recomienda consultar a un nutricionista.`,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "¡Ups! Tuve un pequeño problema técnico en la cocina. ¿Podrías intentar preguntarme de nuevo?";
  }
};
