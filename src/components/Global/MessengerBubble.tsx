"use client";

import { MessageSquare } from "lucide-react";

export default function MessengerBubble() {
  return (
    <label
      htmlFor="messenger-toggle"
      className="messenger-bubble fixed bottom-28 right-6 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-[#0FB8AF] shadow-2xl transition-all duration-300 hover:scale-110"
    >
      <MessageSquare className="h-7 w-7 text-white drop-shadow-md" strokeWidth={2.5} />
    </label>
  );
}