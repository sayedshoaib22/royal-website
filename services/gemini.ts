
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getTravelRecommendation = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "You are an elite travel concierge for RoyalGoa Rentals. Suggest the best vehicle from our fleet (cars: Swift, Baleno, Creta, Ertiga, Thar, Fortuner, C300; bikes: Hunter, Bullet) based on the user's group size and destination in Goa. Keep it brief and professional.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm having trouble thinking right now. For families, I recommend the Ertiga; for solo riders, try the Hunter 350!";
  }
};
