"use client";

import { X, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function MessengerPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Grok, built by xAI. Ask me anything — I'm here to help with honest, insightful answers.",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);
    setError(null);

    const apiMessages = [
      {
        role: "system",
        content: "You are Grok, a maximally truth-seeking AI built by xAI. Be helpful, witty, and concise.",
      },
      ...messages.map((m) => ({
        role: m.sender === "user" ? "user" : "assistant",
        content: m.text,
      })),
      { role: "user", content: userMessage.text },
    ];

    try {
      const response = await fetch("/api/grok", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "grok-4-1-fast-reasoning", // ← Fixed: correct valid model name (January 2026)
          messages: apiMessages,
          temperature: 0.7,
          max_tokens: 2048,
        }),
      });

      if (!response.ok) {
        let errMsg = `API error: ${response.status}`;
        try {
          const errData = await response.json();
          errMsg = errData.error || errMsg;
        } catch {}
        throw new Error(errMsg);
      }

      const data = await response.json();
      const botText =
        data.choices?.[0]?.message?.content?.trim() || "Sorry, no response received.";

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: unknown) {
      let msg = "Failed to reach Grok.";
      if (err instanceof Error) {
        msg = err.message;
      }
      setError(`Error: ${msg}`);
      console.error("Grok API error:", err);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClose = () => {
    const checkbox = document.getElementById("messenger-toggle") as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  };

  return (
    <>
      <input type="checkbox" id="messenger-toggle" className="hidden peer" />
      <label htmlFor="messenger-toggle" className="fixed inset-0 z-40 hidden bg-black/50 backdrop-blur-sm peer-checked:block" />

      <div className="fixed bottom-32 right-6 z-50 hidden w-96 max-w-[calc(100vw-2rem)] flex flex-col rounded-2xl bg-[#252525] shadow-2xl peer-checked:block">
        <div className="flex items-center justify-between border-b border-gray-700 px-6 py-4">
          <div>
            <div className="text-lg font-semibold text-white">Chat with Grok</div>
            <div className="text-xs text-green-400">● Powered by xAI</div>
          </div>
          <button onClick={handleClose} className="text-gray-400 hover:text-white transition-all hover:rotate-90 duration-300" aria-label="Close">
            <X className="w-6 h-6" strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${msg.sender === "user" ? "bg-[#0FB8AF] text-black" : "bg-gray-700 text-white"}`}>
                <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                <p className={`text-xs mt-1 ${msg.sender === "user" ? "text-black/70" : "text-gray-400"}`}>
                  {mounted ? msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : ""}
                </p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-700 rounded-2xl px-4 py-3">
                <div className="flex space-x-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="text-red-400 text-sm bg-red-900/30 rounded-lg p-3 text-center">
              {error}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="border-t border-gray-700 px-6 py-4">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask Grok anything..."
              disabled={isTyping}
              className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-[#0FB8AF] focus:outline-none transition"
            />
            <button
              onClick={handleSend}
              disabled={!inputText.trim() || isTyping}
              className="rounded-lg bg-[#0FB8AF] p-3 text-black transition hover:bg-[#0fb8afdd] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}