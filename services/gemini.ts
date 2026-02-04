
import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the interactive AI assistant for Md. Porag Arman Dhrubo's professional portfolio.
Your goal is to answer questions about Porag's skills, experience, projects, and goals in a professional, friendly, and concise manner.

Here is Porag's background:
- Full Name: ${RESUME_DATA.name}
- Education: Currently studying B.Sc. in CSE at Daffodil Institute of IT (2023-2027).
- Core Skills: Python, C++, OpenCV, Digital System Design, and Media Editing (Premiere Pro, After Effects).
- Key Projects: Hand gesture recognition (OpenCV), ALU Design, Transistor-based Digital Clock.
- Experience: Amazon Automation CSR.
- Interests: Music (Guitar/Cajon), Photography.

Always speak in the third person about Porag, or as a helpful assistant representing him.
If someone asks something not in the resume, politely steer them back to his professional qualifications or tell them to contact him directly at ${RESUME_DATA.email}.
Keep responses under 3 sentences unless asked for detail.
`;

export async function askAssistant(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 250,
      }
    });

    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The assistant is currently unavailable. Please try again later or reach out to Porag directly.";
  }
}
