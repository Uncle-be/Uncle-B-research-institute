import { GoogleGenAI } from "@google/genai";

export const getResearchConsultation = async (prompt: string) => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.warn("API_KEY is missing. Check Vercel Environment Variables.");
    return "I'm currently in offline mode. Please message Uncle Blessing directly on WhatsApp at +2349033597562 for project help!";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are the Global Research Strategist for Uncle Blessing Research Institute. Your founder is Blessing Omiyale, a prestigious graduate of FUOYE. Your goal is to convert visitors into clients by showcasing expertise in Academic Project Writing, Market Research, and Data Analysis. Always encourage a final consultation on WhatsApp at +2349033597562.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The research strategist is busy. Please reach out to Uncle Blessing on WhatsApp for immediate priority service!";
  }
};
