import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/server";
import { nanoid } from "nanoid";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { question, answer, difficulty, roleTags, subjectTags, email } = body;

    // Validate required fields
    if (!question || !answer || !difficulty || !roleTags || !subjectTags || !email) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // Insert question into Supabase
    const { data, error } = await supabase
      .from("questions")
      .insert({
        id: nanoid(),
        question: question.trim(),
        answer: answer.trim(),
        difficulty,
        role_tags: roleTags,
        subject_tags: subjectTags,
        email: email.trim(),
        status: "drafted",
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to submit question" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error submitting question:", error);
    return NextResponse.json(
      { error: "Failed to submit question" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");

    const supabase = await createClient();
    
    let query = supabase.from("questions").select("*").order("created_at", { ascending: false });

    if (status) {
      query = query.eq("status", status);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to fetch questions" },
        { status: 500 }
      );
    }

    return NextResponse.json({ questions: data });
  } catch (error) {
    console.error("Error fetching questions:", error);
    return NextResponse.json(
      { error: "Failed to fetch questions" },
      { status: 500 }
    );
  }
}
