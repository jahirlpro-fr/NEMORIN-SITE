"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function ScrollProgressBar() {
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

            setProgress(scrollPercent);
            setVisible(scrollTop > 100);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Pas d'animation si prefers-reduced-motion
    if (shouldReduceMotion) return null;

    return (
        <div
            className="fixed top-0 left-0 right-0 z-[100] h-[2px] pointer-events-none"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease" }}
        >
            <div
                className="h-full bg-gold"
                style={{
                    width: `${progress}%`,
                    transition: "width 0.1s linear",
                    boxShadow: "0 0 8px rgba(201, 169, 110, 0.6)",
                }}
            />
        </div>
    );
}