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
      text: "Hello! I'm your AI Assistant, powered by Groq. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on mount and when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Optional: Also scroll immediately on mount after a tiny delay
  useEffect(() => {
    if (mounted) {
      const timer = setTimeout(scrollToBottom, 100);
      return () => clearTimeout(timer);
    }
  }, [mounted]);

  // Lock body scroll when modal is open
  useEffect(() => {
    const checkbox = document.getElementById("messenger-toggle") as HTMLInputElement;
    
    const handleCheckboxChange = () => {
      const isChecked = checkbox?.checked || false;
      setIsOpen(isChecked);
      
      if (isChecked) {
        // Lock body scroll
        document.body.style.overflow = 'hidden';
      } else {
        // Unlock body scroll
        document.body.style.overflow = 'auto';
      }
    };

    if (checkbox) {
      checkbox.addEventListener('change', handleCheckboxChange);
      handleCheckboxChange(); // Check initial state
    }

    return () => {
      if (checkbox) {
        checkbox.removeEventListener('change', handleCheckboxChange);
      }
      // Cleanup: always unlock on unmount
      document.body.style.overflow = 'auto';
    };
  }, []);

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

    try {
      const response = await fetch("/api/messenger", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            ...messages.map((m) => ({
              role: m.sender === "user" ? "user" : "assistant",
              content: m.text,
            })),
            { role: "user", content: userMessage.text },
          ],
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || `Server error: ${response.status}`);
      }

      const data = await response.json();
      const botText = data.reply?.trim() || "Sorry, no response received.";

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: unknown) {
      let errorMessage = "Failed to connect";
      if (err instanceof Error) errorMessage = err.message;
      setError(`Error: ${errorMessage}`);
      console.error("Messenger error:", err);
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
    if (checkbox) {
      checkbox.checked = false;
      // Ensure body scroll is unlocked
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <>
      <input type="checkbox" id="messenger-toggle" className="hidden peer" />
      <label 
        htmlFor="messenger-toggle" 
        className="fixed inset-0 z-40 hidden bg-black/50 backdrop-blur-sm peer-checked:block"
        onClick={handleClose}
      />

      <div className="fixed bottom-32 right-6 z-50 hidden w-96 h-[600px] max-h-[calc(100vh-10rem)] max-w-[calc(100vw-2rem)] flex flex-col rounded-2xl bg-[#252525] shadow-2xl peer-checked:flex overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-700 px-6 py-4 flex-shrink-0">
          <div>
            <div className="text-lg font-semibold text-white">AI Assistant</div>
            <div className="text-xs text-green-400">● Powered by Groq</div>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-all hover:rotate-90 duration-300"
            aria-label="Close"
          >
            <X className="w-6 h-6" strokeWidth={2.5} />
          </button>
        </div>

        {/* Chat Messages Area - FIXED with proper height and scroll containment */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto px-6 py-4 space-y-4 custom-scrollbar
                     [&::-webkit-scrollbar]:w-2.5
                     [&::-webkit-scrollbar-track]:bg-transparent
                     [&::-webkit-scrollbar-thumb]:bg-[#0FB8AF]
                     [&::-webkit-scrollbar-thumb]:rounded-full
                     [&::-webkit-scrollbar-thumb]:hover:bg-[#0cb8b0]"
          style={{ overscrollBehavior: 'contain' }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  msg.sender === "user" ? "bg-[#0FB8AF] text-black" : "bg-gray-700 text-white"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    msg.sender === "user" ? "text-black/70" : "text-gray-400"
                  }`}
                >
                  {mounted
                    ? msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : ""}
                </p>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
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

          {/* Error Message */}
          {error && (
            <div className="text-red-400 text-sm bg-red-900/30 rounded-lg p-3 text-center">
              {error}
            </div>
          )}

          {/* Anchor for scrolling to bottom */}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-700 px-6 py-4 flex-shrink-0">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
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