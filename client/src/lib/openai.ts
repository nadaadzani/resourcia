import OpenAI from "openai";

const apiKey = process.env.OPEN_AI_KEY;

if (!apiKey) {
  throw Error("OPEN_AI_KEY is not set");
}

const openAi = new OpenAI({ apiKey });

export default openAi;
