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
    // Validate request body
    const contentType = req.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { error: 'Content-Type must be application/json' },
        { status: 415 }
      );
    }

    const body = await req.json();
    const { messages } = body;

    if (!Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid messages format. Expected an array.' },
        { status: 400 }
      );
    }

    // Validate each message in the array
    const validMessages = messages.filter(msg => 
      msg && 
      typeof msg === 'object' && 
      typeof msg.role === 'string' && 
      typeof msg.content === 'string' &&
      ['system', 'user', 'assistant'].includes(msg.role)
    );

    if (validMessages.length === 0) {
      return NextResponse.json(
        { error: 'No valid messages found in the request.' },
        { status: 400 }
      );
    }

    // Check API key
    if (!process.env.GROQ_API_KEY) {
      console.error('GROQ_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Service configuration error' },
        { status: 500 }
      );
    }

    // Call Groq API
    const completion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...validMessages,
      ],
      model: 'llama-3.1-8b-instant', // Fast and great for general chat
      temperature: 0.7,
      max_tokens: 1024,
      stream: false,
    });

    const reply = completion.choices[0]?.message?.content?.trim() 
      || "I apologize, but I couldn't generate a response. Please try again.";

    return NextResponse.json({ 
      reply,
      model: completion.model,
      usage: completion.usage
    });

  } catch (error: unknown) {
    console.error('Groq API Error:', error);

    // Handle specific error types
    let errorMessage = 'Failed to process your request';
    let statusCode = 500;

    if (error instanceof Error) {
      // Groq API errors
      if ('status' in error && typeof error.status === 'number') {
        statusCode = error.status;
      }
      
      // Rate limiting or authentication errors
      if (error.message.includes('API key') || error.message.includes('auth')) {
        errorMessage = 'Authentication error. Please check API configuration.';
        statusCode = 401;
      } else if (error.message.includes('rate limit')) {
        errorMessage = 'Rate limit exceeded. Please try again later.';
        statusCode = 429;
      } else {
        errorMessage = error.message;
      }
    }

    return NextResponse.json(
      { 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error instanceof Error ? error.message : 'Unknown error' : undefined
      },
      { status: statusCode }
    );
  }
}

// Add OPTIONS method for CORS support (if needed)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}