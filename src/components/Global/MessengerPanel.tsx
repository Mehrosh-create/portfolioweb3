"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function MessengerPanel() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
        
        // Auto close after 3 seconds
        setTimeout(() => {
          const checkbox = document.getElementById(
            "messenger-toggle"
          ) as HTMLInputElement;
          if (checkbox) checkbox.checked = false;
          setSubmitStatus({ type: null, message: "" });
        }, 3000);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    const checkbox = document.getElementById(
      "messenger-toggle"
    ) as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
    setSubmitStatus({ type: null, message: "" });
  };

  return (
    <>
      {/* Hidden checkbox for toggle */}
      <input type="checkbox" id="messenger-toggle" className="hidden peer" />

      {/* Backdrop - closes when clicked */}
      <label
        htmlFor="messenger-toggle"
        className="fixed inset-0 z-40 hidden bg-black/50 backdrop-blur-sm peer-checked:block"
      />

      {/* Chat Panel */}
      <div className="wrapper fixed bottom-32 right-6 z-50 hidden w-96 max-w-[calc(100vw-2rem)] rounded-2xl bg-[#252525] p-6 shadow-2xl peer-checked:block">
        {/* Close Button - Top Right Corner with X icon */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 cursor-pointer text-gray-400 hover:text-white transition-all hover:rotate-90 duration-300 z-10"
          aria-label="Close messenger"
        >
          <X className="w-6 h-6" strokeWidth={2.5} />
        </button>

        <div className="head-text mb-4 text-center text-lg font-semibold text-white">
          Let&apos;s chat with me? - Online
        </div>

        <div className="chat-box">
          <div className="desc-text mb-6 text-center text-sm text-gray-300">
            Please fill out the form below to start chatting with me directly.
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              className="input-field w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-[#0FB8AF] focus:outline-none transition"
              name="name"
              placeholder="Your Name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <input
              className="input-field w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-[#0FB8AF] focus:outline-none transition"
              name="email"
              placeholder="Your Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <textarea
              className="input-field w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-4 text-white placeholder-gray-400 focus:border-[#0FB8AF] focus:outline-none transition resize-none"
              placeholder="Your Message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />

            {/* Status Messages */}
            {submitStatus.type && (
              <div
                className={`rounded-lg p-3 text-sm ${
                  submitStatus.type === "success"
                    ? "bg-green-900/50 text-green-200 border border-green-700"
                    : "bg-red-900/50 text-red-200 border border-red-700"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="messenger-send-btn w-full rounded-lg bg-[#0FB8AF] py-3 font-semibold text-black transition hover:bg-[#0fb8afdd] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}