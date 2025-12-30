// src/components/Contact/ContactForm.tsx
"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setStatusMessage(null);
  };

  const handleServiceSelect = (service: string) => {
    setFormData((prev) => ({ ...prev, service }));
    setErrors((prev) => ({ ...prev, service: "" }));
    setStatusMessage(null);
    setIsDropdownOpen(false);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { firstName: "", lastName: "", email: "", service: "", message: "" };

    if (!formData.firstName.trim()) { newErrors.firstName = "Required"; isValid = false; }
    if (!formData.lastName.trim()) { newErrors.lastName = "Required"; isValid = false; }
    if (!formData.email.trim()) { newErrors.email = "Required"; isValid = false; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format"; isValid = false;
    }
    if (!formData.service.trim()) { newErrors.service = "Required"; isValid = false; }
    if (!formData.message.trim()) { newErrors.message = "Required"; isValid = false; }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    setStatusMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, subject: formData.service }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Server error");

      setStatusMessage({ type: "success", text: "Thanks — your message was sent! We'll get back to you within 24 hours." });

      setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
      setErrors({ firstName: "", lastName: "", email: "", service: "", message: "" });
    } catch (err: unknown) {
      console.error("Contact submit error:", err);
      const errorMessage = err instanceof Error ? err.message : "Failed to send. Try again later.";
      setStatusMessage({ type: "error", text: errorMessage });
    } finally { setSubmitting(false); }
  };

  const serviceOptions = [
    "PROJECT MANAGEMENT",
    "ECOMMERCE SOLUTIONS",
    "BUSINESS OPERATIONS",
    "AUTOMATED WORKFLOW",
    "CRM AUTOMATION",
    "DATA ANALYSIS",
    "DATA MIGRATION",
  ];

  return (
    <div className="bg-gray-dark p-6 sm:p-8 rounded-lg border border-gray-700 hover:border-[#0fb8af] transition-all duration-300 w-full">
      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
        {/* Name Fields */}
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6">
          {["firstName", "lastName"].map((field, idx) => (
            <div key={field}>
              <label
                className="block text-foreground font-semibold mb-3 uppercase text-sm"
                style={{ fontFamily: '"Century Gothic", Inter, sans-serif' }}
              >
                {field === "firstName" ? "First Name *" : "Last Name *"}
              </label>
              <div className="border border-gray-700 p-4 rounded-lg bg-background hover:border-foreground transition-colors">
                <input
                  type="text"
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full bg-transparent text-foreground text-base placeholder-gray-400 focus:outline-none"
                  placeholder={field === "firstName" ? "First Name" : "Last Name"}
                  style={{ fontFamily: '"Inter", sans-serif' }}
                  required
                />
              </div>
              {errors[field as keyof typeof errors] && (
                <span className="text-red-500 text-sm block mt-2">
                  {errors[field as keyof typeof errors]}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Email */}
        <div>
          <label className="block text-foreground font-semibold mb-3 uppercase text-sm" style={{ fontFamily: '"Century Gothic", Inter, sans-serif' }}>
            Email *
          </label>
          <div className="border border-gray-700 p-4 rounded-lg bg-background hover:border-foreground transition-colors">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent text-foreground text-base placeholder-gray-400 focus:outline-none"
              placeholder="your.email@example.com"
              style={{ fontFamily: '"Inter", sans-serif' }}
              required
            />
          </div>
          {errors.email && <span className="text-red-500 text-sm block mt-2">{errors.email}</span>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-foreground font-semibold mb-3 uppercase text-sm" style={{ fontFamily: '"Century Gothic", Inter, sans-serif' }}>
            Phone
          </label>
          <div className="border border-gray-700 p-4 rounded-lg bg-background hover:border-foreground transition-colors">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent text-foreground text-base placeholder-gray-400 focus:outline-none"
              placeholder="+1 (555) 000-0000"
              style={{ fontFamily: '"Inter", sans-serif' }}
            />
          </div>
        </div>

        {/* Service Dropdown */}
        <div>
          <label className="block text-foreground font-semibold mb-3 uppercase text-sm" style={{ fontFamily: '"Century Gothic", Inter, sans-serif' }}>
            Service Interested In *
          </label>
          <div className="relative">
            <div
              className="border border-gray-700 p-4 rounded-lg bg-background hover:border-foreground transition-colors cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              <div className="flex items-center justify-between">
                <span className={`text-base ${formData.service ? 'text-foreground' : 'text-gray-400'}`}>
                  {formData.service || 'Select a service...'}
                </span>
                <svg
                  className={`w-4 h-4 text-foreground transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {isDropdownOpen && (
              <div className="absolute z-50 w-full mt-2 bg-gray-dark border border-gray-700 rounded-lg shadow-xl max-h-60 overflow-auto" style={{ fontFamily: '"Inter", sans-serif' }}>
                {serviceOptions.map((service, index) => (
                  <div
                    key={index}
                    onClick={() => handleServiceSelect(service)}
                    className="px-4 py-3 cursor-pointer text-foreground hover:bg-[#0fb8af] hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </div>
                ))}
              </div>
            )}
          </div>
          {errors.service && <span className="text-red-500 text-sm block mt-2">{errors.service}</span>}
        </div>

        {/* Message */}
        <div>
          <label className="block text-foreground font-semibold mb-3 uppercase text-sm" style={{ fontFamily: '"Century Gothic", Inter, sans-serif' }}>
            Message *
          </label>
          <div className="border border-gray-700 p-4 rounded-lg bg-background hover:border-foreground transition-colors">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full bg-transparent text-foreground text-base focus:outline-none resize-none placeholder-gray-400"
              placeholder="Tell us about your project or inquiry..."
              style={{ fontFamily: '"Inter", sans-serif' }}
              required
            />
          </div>
          {errors.message && <span className="text-red-500 text-sm block mt-2">{errors.message}</span>}
        </div>

        {/* Submit Button */}
        <div className="space-y-4">
          <button
            type="submit"
            disabled={submitting}
            className="group relative bg-gradient-to-r from-[#0fb8af] via-[#0fb8af] to-[#0d9e96] disabled:opacity-60 text-black px-8 py-5 rounded-full font-bold text-lg hover:from-[#0d9e96] hover:to-[#0b8a82] transition-all duration-500 w-full text-center overflow-hidden transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-2xl hover:shadow-[#0fb8af]/30 focus:outline-none focus:ring-4 focus:ring-[#0fb8af]/40 focus:ring-offset-2 focus:ring-offset-gray-dark"
          >
            <span className="relative z-10 flex items-center justify-center gap-3 tracking-wide">
              {submitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span className="animate-pulse">SENDING...</span>
                </>
              ) : (
                <>
                  <span className="group-hover:translate-x-[-2px] transition-transform duration-300">
                    SEND MESSAGE
                  </span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300 group-hover:scale-110"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </span>
          </button>

          {statusMessage && (
            <div className="text-center animate-fadeIn">
              <p className={`text-base ${statusMessage.type === "success" ? "text-green-400 animate-bounce-in" : "text-red-400 animate-shake"}`}>
                {statusMessage.text}
              </p>
            </div>
          )}
        </div>
      </form>

      {/* Animations */}
      <style jsx>{`
        @keyframes pulse-slow { 0%,100%{opacity:0.2;}50%{opacity:0.4;} }
        @keyframes ripple {0%{transform:translate(-50%,-50%) scale(0);opacity:1;}100%{transform:translate(-50%,-50%) scale(4);opacity:0;} }
        @keyframes bounce-in {0%{transform:scale(0.3);opacity:0;}50%{transform:scale(1.05);}70%{transform:scale(0.9);}100%{transform:scale(1);opacity:1;} }
        @keyframes shake {0%,100%{transform:translateX(0);}10%,30%,50%,70%,90%{transform:translateX(-2px);}20%,40%,60%,80%{transform:translateX(2px);} }
        @keyframes fadeIn {from{opacity:0;transform:translateY(-10px);}to{opacity:1;transform:translateY(0);} }
        .animate-pulse-slow {animation:pulse-slow 2s cubic-bezier(0.4,0,0.6,1) infinite;}
        .animate-ripple {animation:ripple 0.6s linear;}
        .animate-bounce-in {animation:bounce-in 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);}
        .animate-shake {animation:shake 0.5s cubic-bezier(.36,.07,.19,.97) both;}
        .animate-fadeIn {animation:fadeIn 0.3s ease-out;}
      `}</style>
    </div>
  );
};

export default ContactForm;
