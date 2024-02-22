import openAi from "@/lib/openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextRequest } from "next/server";
import {
  ChatCompletionMessage,
  ChatCompletionSystemMessageParam
} from "openai/resources/index.mjs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: ChatCompletionMessage[] = body.messages;

    const systemMessage: ChatCompletionSystemMessageParam = {
      role: "system",
      content:"Welcome to Resourcia, your sustainable solution for trading food waste! As the official chatbot for Resourcia, I'm here to assist you in turning your food waste into valuable points. Earn 1 point for every 1 kg of waste you contribute, and watch as your points accumulate. These points can be exchanged for a variety of products, including sustainable items and goods created from upcycled materials.Discover the environmental impact you can make by participating in our waste trading system. Your collected waste is utilized to produce sustainable products with higher economic value or is transferred to green companies in need.Have questions or facing issues? Reach out to us at ryanwillyanto@gmail.com. If you're interested in exploring our product offerings, visit http://localhost:3000/. Let's work together towards a greener and more sustainable future with Resourcia! if the questions is not related to this app please dont answer  "
    };

    const response = await openAi.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [...messages,systemMessage],
    });

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
