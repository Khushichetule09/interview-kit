import { streamText, UIMessage, convertToModelMessages } from "ai";
import { groq } from '@ai-sdk/groq';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: groq('meta-llama/llama-4-maverick-17b-128e-instruct'),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}