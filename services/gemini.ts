
import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from "../constants";

const SYSTEM_INSTRUCTION = `
You are the interactive AI assistant for Md. Porag Arman Dhrubo's professional portfolio.
Your goal is to answer questions about Porag's skills, experience, projects, and goals in a professional, friendly, and concise manner.

Here is Porag's background:
- Full Name: ${RESUME_DATA.name}
- Education: Currently studying B.Sc. in CSE at Daffodil Institute of IT (2023-2027).
- Core Skills: Python, C++, OpenCV, Digital System Design, and Media Editing (Premiere Pro, After Effects).
- Key Projects: Hand gesture recognition (OpenCV), ALU Design, BCD to 7-Segment Decoder.
- Experience: Amazon Automation CSR.
- Interests: Music (Guitar/Cajon), Photography.

Always speak in the third person about Porag, or as a helpful assistant representing him.
If someone asks something not in the resume, politely steer them back to his professional qualifications or tell them to contact him directly at ${RESUME_DATA.email}.
Keep responses under 3 sentences unless asked for detail.
`;

export async function askAssistant(prompt: string) {
  try {
    // Initialize inside the function to avoid top-level ReferenceErrors for process.env
    // and to ensure we use the most up-to-date environment variables.
    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
    
    if (!apiKey) {
      console.warn("Gemini API Key is missing. Assistant will be unavailable.");
      return "I'm currently in 'offline mode' because the API key hasn't been configured yet. You can still browse Porag's projects manually!";
    }

    const ai = new GoogleGenAI({ apiKey });
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
    return "The assistant is currently having some trouble connecting. Please try again later or reach out to Porag directly.";
  }
}
