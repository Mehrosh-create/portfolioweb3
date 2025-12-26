"use client";
import { useState } from "react";

export default function PortfolioButton() {
    const [clicked, setClicked] = useState(false);

    return (
        <button
            onClick={() => setClicked(true)}
            className={`border-2 px-5 py-2 uppercase transition-all duration-300 transform hover:scale-105 text-sm text-center font-semibold ${clicked
                ? "bg-[#0fb8af] text-black border-[#0fb8af]"
                : "border-[#0fb8af] text-[#0fb8af]"
                }`}
            style={{
                letterSpacing: "0.06em",
            }}
        >
            View Portfolio
        </button>
    );
}
