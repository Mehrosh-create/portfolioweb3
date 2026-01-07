// app/api/grok/route.ts
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  let body: unknown;

  // Safely parse request body
  try {
    body = await req.json();
  } catch {
    return new Response(
      JSON.stringify({ error: "Invalid JSON in request body" }),
      { status: 400 }
    );
  }

  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "Server configuration error: Missing API key" }),
      { status: 500 }
    );
  }

  try {
    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
    });

    // Handle non-2xx responses from xAI
    if (!res.ok) {
      let errorMessage = "API error";

      try {
        const errData = await res.json();
        errorMessage = errData.error?.message || errorMessage;
      } catch {
        // If response isn't JSON, use status text
        errorMessage = `API error: ${res.status} ${res.statusText}`;
      }

      return new Response(
        JSON.stringify({ error: errorMessage }),
        { status: res.status }
      );
    }

    // Successfully forward the response (supports streaming)
    return new Response(res.body, {
      status: res.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: unknown) {
    // Safely handle any unexpected error without accessing .message directly
    let message = "An unexpected error occurred while contacting the AI service";

    if (error instanceof Error) {
      message = error.message;
    } else if (typeof error === "string") {
      message = error;
    }

    // Log for server-side debugging
    console.error("Grok proxy error:", error);

    return new Response(
      JSON.stringify({ error: message }),
      { status: 500 }
    );
  }
};

export const runtime = "nodejs"; // Best for stable fetch with headers