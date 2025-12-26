"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeSlideProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

const FadeSlide = ({ children, delay = 0, direction = "up" }: FadeSlideProps) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.8, delay },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export default FadeSlide;
