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
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      service: "",
      message: "",
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }
    if (!formData.service.trim()) {
      newErrors.service = "Please select a service";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmitting(true);
    setStatusMessage(null);

    try {
      // Replace with your actual API endpoint
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: formData.service,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Failed to send message");
      }

      setStatusMessage({
        type: "success",
        text: "Thank you! Your message has been sent. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setErrors({
        firstName: "",
        lastName: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (err: unknown) {
      console.error("Form submission error:", err);
      setStatusMessage({
        type: "error",
        text: err instanceof Error ? err.message : "Something went wrong. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
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
    <div className="bg-gray-dark p-6 sm:p-8 lg:p-10 rounded-lg border border-gray-700 hover:border-[#0fb8af] transition-all duration-300 w-full max-w-[920px] mx-auto">
      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        {/* Row 1: First Name + Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {["firstName", "lastName"].map((field) => (
            <div key={field}>
              <label
                className="block text-foreground font-semibold mb-2.5 uppercase text-sm tracking-wide"
                style={{ fontFamily: '"Century Gothic", Inter, sans-serif' }}
              >
                {field === "firstName" ? "FIRST NAME *" : "LAST NAME *"}
              </label>
              <div className="border border-gray-700 p-3.5 rounded-lg bg-background hover:border-foreground transition-colors">
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
                <span className="text-red-500 text-sm block mt-1.5">
                  {errors[field as keyof typeof errors]}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Row 2: Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {/* Email */}
          <div>
            <label
              className="block text-foreground font-semibold mb-2.5 uppercase text-sm tracking-wide"
              style={{ fontFamily: '"Century Gothic", Inter, sans-serif' }}
            >
              EMAIL *
            </label>
            <div className="border border-gray-700 p-3.5 rounded-lg bg-background hover:border-foreground transition-colors">
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
            {errors.email && (
              <span className="text-red-500 text-sm block mt-1.5">{errors.email}</span>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              className="block text-foreground font-semibold mb-2.5 uppercase text-sm tracking-wide"
              style={{ fontFamily: '"Century Gothic", Inter, sans-serif' }}
            >
              PHONE
            </label>
            <div className="border border-gray-700 p-3.5 rounded-lg bg-background hover:border-foreground transition-colors">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent text-foreground text-base placeholder-gray-400 focus:outline-none"
                placeholder="+92 300 0369622"
                style={{ fontFamily: '"Inter", sans-serif' }}
              />
            </div>
          </div>
        </div>

        {/* Service Dropdown */}
        <div>
          <label
            className="block text-foreground font-semibold mb-2.5 uppercase text-sm tracking-wide"
            style={{ fontFamily: '"Century Gothic", Inter, sans-serif' }}
          >
            SERVICE INTERESTED IN *
          </label>
          <div className="relative">
            <div
              className="border border-gray-700 p-3.5 rounded-lg bg-background hover:border-foreground transition-colors cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-base ${
                    formData.service ? "text-foreground" : "text-gray-400"
                  }`}
                >
                  {formData.service || "Select a service..."}
                </span>
                <svg
                  className={`w-4 h-4 text-foreground transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {isDropdownOpen && (
              <div className="absolute z-50 w-full mt-2 bg-gray-dark border border-gray-700 rounded-lg shadow-xl max-h-60 overflow-auto">
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
          {errors.service && (
            <span className="text-red-500 text-sm block mt-1.5">{errors.service}</span>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            className="block text-foreground font-semibold mb-2.5 uppercase text-sm tracking-wide"
            style={{ fontFamily: '"Century Gothic", Inter, sans-serif' }}
          >
            MESSAGE *
          </label>
          <div className="border border-gray-700 p-3.5 rounded-lg bg-background hover:border-foreground transition-colors">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-transparent text-foreground text-base focus:outline-none resize-none placeholder-gray-400"
              placeholder="Tell us about your project or inquiry..."
              style={{ fontFamily: '"Inter", sans-serif' }}
              required
            />
          </div>
          {errors.message && (
            <span className="text-red-500 text-sm block mt-1.5">{errors.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
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
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </>
              )}
            </span>
          </button>

          {statusMessage && (
            <div className="text-center mt-4 animate-fadeIn">
              <p
                className={`text-base ${
                  statusMessage.type === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {statusMessage.text}
              </p>
            </div>
          )}
        </div>
      </form>

      {/* You can keep or remove animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;