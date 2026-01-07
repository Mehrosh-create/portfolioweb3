import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

const SYSTEM_PROMPT = `You are a helpful, witty, and highly capable AI Assistant powered by Groq.
Be friendly, concise, and provide accurate answers to any question.
You can discuss anything: technology, science, coding, general knowledge, advice, or fun topics.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages format' }, { status: 400 });
    }

    const completion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages,
      ],
      model: 'llama-3.1-8b-instant', // Fast and great for general chat
      temperature: 0.7,
      max_tokens: 1024,
    });

    const reply = completion.choices[0]?.message?.content?.trim() || "No response generated.";

    return NextResponse.json({ reply });
  } catch (error: unknown) {
    // Fixed: 'unknown' instead of 'any' → satisfies strict TypeScript
    console.error('Groq API Error:', error);

    let errorMessage = 'Failed to get response from AI';
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}