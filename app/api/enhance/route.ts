import { createGroq } from "@ai-sdk/groq";
import { generateText } from "ai";
import { NextRequest, NextResponse } from "next/server";

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(request: NextRequest) {
  try {
    const { content } = await request.json();

    if (!content || typeof content !== "string") {
      return NextResponse.json(
        { error: "Content is required" },
        { status: 400 }
      );
    }

    const { text } = await generateText({
      model: groq("llama-3.3-70b-versatile"),
      prompt: `You are an expert interview coach. Enhance and improve the following answer to make it SHORT, PROFESSIONAL, and INTERVIEW-APPROPRIATE.

Rules:
- Keep it VERY SHORT (maximum 3-4 sentences)
- Improve clarity and grammar
- Make it professional and concise
- Remove unnecessary details
- If input is too long, intelligently compress it into a brief answer
- Focus on the most important points only
- No fluff or filler words

Original content: ${content}

Provide only the enhanced answer, nothing else.`,
    });

    // Ensure it stays short
    let enhanced = text.trim();
    const sentences = enhanced.split(/[.!?]+/).filter(s => s.trim());
    
    if (sentences.length > 4) {
      enhanced = sentences.slice(0, 4).join('. ') + '.';
    }

    return NextResponse.json({ enhanced });
  } catch (error) {
    console.error("Error enhancing content:", error);
    return NextResponse.json(
      { error: "Failed to enhance content" },
      { status: 500 }
    );
  }
}
