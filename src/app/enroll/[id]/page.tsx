"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function EnrollmentFormPage() {
    const { id } = useParams(); // capture which program/toolkit/course
    const { theme } = useTheme();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitting, setSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState<{
        type: "success" | "error";
        text: string;
    } | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
        setStatusMessage(null);
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { name: "", email: "", message: "" };

        if (!formData.name.trim()) {
            newErrors.name = "Required";
            isValid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = "Required";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
            isValid = false;
        }
        if (!formData.message.trim()) {
            newErrors.message = "Required";
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
            const res = await fetch("/api/enroll", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    programId: id, // send which program they are enrolling for
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || "Server error");

            setStatusMessage({
                type: "success",
                text: "Enrollment request submitted successfully!",
            });

            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
            setErrors({ name: "", email: "", message: "" });
        } catch (err: unknown) {
            console.error("Enrollment submit error:", err);
            setStatusMessage({
                type: "error",
                text: "Failed to submit. Try again later.",
            });
        } finally {
            setSubmitting(false);
        }
    };

    const backgroundColor = theme === 'dark' ? 'bg-[#151515]' : 'bg-white';
    const textColor = theme === 'dark' ? 'text-white' : 'text-black';
    const borderColor = theme === 'dark' ? 'border-[#606060]' : 'border-gray-300';
    const inputBackground = theme === 'dark' ? 'bg-[#252525]' : 'bg-gray-100';
    const hoverBorder = theme === 'dark' ? 'hover:border-white' : 'hover:border-gray-500';

    return (
        <div className={`min-h-screen flex items-center justify-center ${backgroundColor} ${textColor} px-4 sm:px-6 lg:px-8 py-10`}>
            <div className={`w-full max-w-md sm:max-w-lg lg:max-w-2xl ${backgroundColor} p-6 sm:p-8 lg:p-10 rounded-lg border ${borderColor} hover:border-[#0fb8af] transition-all duration-300`}>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-[#0fb8af] uppercase text-center sm:text-left">
                    Enroll for Program (ID: {id})
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                    {/* Name */}
                    <div>
                        <label className={`block ${textColor} font-semibold mb-2 sm:mb-3 uppercase text-sm sm:text-base lg:text-lg`}>
                            Name <span className="text-red-500 ml-1">(Required)</span>
                        </label>
                        <div className={`border ${theme === 'dark' ? 'border-[#151515]' : 'border-gray-200'} p-3 sm:p-4 rounded-lg ${inputBackground} ${hoverBorder}`}>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full bg-transparent ${textColor} text-base sm:text-lg ${theme === 'dark' ? 'placeholder-gray-400' : 'placeholder-gray-500'} focus:outline-none`}
                                placeholder="Your Full Name"
                                required
                            />
                            {errors.name && (
                                <span className="text-red-500 text-sm block mt-1">
                                    {errors.name}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className={`block ${textColor} font-semibold mb-2 sm:mb-3 uppercase text-sm sm:text-base lg:text-lg`}>
                            Email <span className="text-red-500 ml-1">(Required)</span>
                        </label>
                        <div className={`border ${theme === 'dark' ? 'border-[#151515]' : 'border-gray-200'} p-3 sm:p-4 rounded-lg ${inputBackground} ${hoverBorder}`}>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full bg-transparent ${textColor} text-base sm:text-lg ${theme === 'dark' ? 'placeholder-gray-400' : 'placeholder-gray-500'} focus:outline-none`}
                                placeholder="Your Email"
                                required
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm block mt-1">
                                    {errors.email}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Phone */}
                    <div>
                        <label className={`block ${textColor} font-semibold mb-2 sm:mb-3 uppercase text-sm sm:text-base lg:text-lg`}>
                            Phone
                        </label>
                        <div className={`border ${theme === 'dark' ? 'border-[#151515]' : 'border-gray-200'} p-3 sm:p-4 rounded-lg ${inputBackground} ${hoverBorder}`}>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`w-full bg-transparent ${textColor} text-base sm:text-lg ${theme === 'dark' ? 'placeholder-gray-400' : 'placeholder-gray-500'} focus:outline-none`}
                                placeholder="Your Phone (optional)"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className={`block ${textColor} font-semibold mb-2 sm:mb-3 uppercase text-sm sm:text-base lg:text-lg`}>
                            Message <span className="text-red-500 ml-1">(Required)</span>
                        </label>
                        <div className={`border ${theme === 'dark' ? 'border-[#151515]' : 'border-gray-200'} p-3 sm:p-4 rounded-lg ${inputBackground} ${hoverBorder}`}>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className={`w-full bg-transparent ${textColor} text-base sm:text-lg focus:outline-none resize-none ${theme === 'dark' ? 'placeholder-gray-400' : 'placeholder-gray-500'}`}
                                placeholder="Tell us why you want to enroll..."
                                required
                            />
                            {errors.message && (
                                <span className="text-red-500 text-sm block mt-1">
                                    {errors.message}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <button
                            type="submit"
                            disabled={submitting}
                            className="bg-[#0fb8af] disabled:opacity-60 text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-base sm:text-lg hover:opacity-90 transition-colors whitespace-nowrap"
                        >
                            {submitting ? "Submitting..." : "Submit Enrollment"}
                        </button>

                        {statusMessage && (
                            <p
                                className={`text-sm sm:text-base ${statusMessage.type === "success"
                                    ? "text-green-400"
                                    : "text-red-400"
                                    }`}
                            >
                                {statusMessage.text}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}