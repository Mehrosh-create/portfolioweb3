// components/ui/animations.tsx
import { motion } from "framer-motion";

export const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateY: -10 },
  visible: { opacity: 1, y: 0, rotateY: 0, transition: { duration: 0.8, ease: "easeOut" } },
  hover: { 
    y: -12, 
    scale: 1.03,
    boxShadow: "0 25px 50px rgba(15, 184, 175, 0.15)",
    transition: { duration: 0.4 }
  }
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

export const FadeSlide = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);