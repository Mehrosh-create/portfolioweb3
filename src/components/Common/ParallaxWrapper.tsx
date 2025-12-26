"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxWrapperProps {
    children: ReactNode;
    strength?: number; // how strong the tilt/parallax should be
    className?: string;
}

export default function ParallaxWrapper({
    children,
    strength = 25,
    className = "",
}: ParallaxWrapperProps) {
    const ref = useRef<HTMLDivElement>(null);

    // Motion values for mouse position
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring effect
    const springX = useSpring(x, { stiffness: 200, damping: 20 });
    const springY = useSpring(y, { stiffness: 200, damping: 20 });

    // Map values to rotation
    const rotateX = useTransform(springY, [-0.5, 0.5], [strength, -strength]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-strength, strength]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;

        const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
        const offsetY = (e.clientY - rect.top) / rect.height - 0.5;

        x.set(offsetX);
        y.set(offsetY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className={`inline-block ${className}`}
            style={{ rotateX, rotateY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </motion.div>
    );
}
