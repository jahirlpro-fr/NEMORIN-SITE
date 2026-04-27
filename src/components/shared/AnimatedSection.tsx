"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    variant?: "stagger" | "fadeInUp" | "none";
}

export function AnimatedSection({
    children,
    className = "",
    delay = 0,
    variant = "stagger",
}: AnimatedSectionProps) {
    const ref = useRef < HTMLDivElement > (null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Respect prefers-reduced-motion nativement via Framer Motion
    const shouldReduceMotion = useReducedMotion();

    // Si l'utilisateur préfère moins d'animations → on affiche directement l'état final
    if (shouldReduceMotion) {
        return (
            <div ref={ref} className={className}>
                {children}
            </div>
        );
    }

    const selectedVariant = variant === "stagger" ? staggerContainer : fadeInUp;

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={selectedVariant}
            className={className}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </motion.div>
    );
}