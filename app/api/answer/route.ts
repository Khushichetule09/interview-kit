import { createGroq } from "@ai-sdk/groq";
import { generateText } from "ai";
import { NextRequest, NextResponse } from "next/server";

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();

    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { error: "Question is required" },
        { status: 400 }
      );
    }

    const { text } = await generateText({
      model: groq("llama-3.3-70b-versatile"),
      prompt: `You are an expert interview coach. Generate a SHORT, PRECISE, and INTERVIEW-FOCUSED answer for the following question.

Rules:
- Maximum 3-4 sentences
- No storytelling or unnecessary details
- Focus on key points only
- Direct and concise
- Interview-appropriate language
- If the topic requires more explanation, summarize the most important aspects only

Question: ${question}

Provide only the answer, nothing else.`,
    });

    // Further shorten if still too long
    let answer = text.trim();
    const sentences = answer.split(/[.!?]+/).filter(s => s.trim());
    
    if (sentences.length > 4) {
      answer = sentences.slice(0, 4).join('. ') + '.';
    }

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Error generating answer:", error);
    return NextResponse.json(
      { error: "Failed to generate answer" },
      { status: 500 }
    );
  }
}
