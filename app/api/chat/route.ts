import {
  streamText,
  UIMessage,
  convertToModelMessages,
  smoothStream,
} from "ai";
import { groq } from "@ai-sdk/groq";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: groq("meta-llama/llama-4-maverick-17b-128e-instruct"),
    messages: await convertToModelMessages(messages),
    experimental_transform: smoothStream({
      delayInMs: 20,
      chunking: "word",
    }),
  });

  return result.toUIMessageStreamResponse();
}
