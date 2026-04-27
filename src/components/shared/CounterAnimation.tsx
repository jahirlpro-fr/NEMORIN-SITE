"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterAnimationProps {
    target: number;
    duration?: number; // en ms
    suffix?: string;   // ex: "+", "%", " ans"
    prefix?: string;   // ex: "+"
    className?: string;
}

export function CounterAnimation({
    target,
    duration = 1500,
    suffix = "",
    prefix = "",
    className = "",
}: CounterAnimationProps) {
    const [count, setCount] = useState(0);
    const ref = useRef < HTMLSpanElement > (null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const hasAnimated = useRef(false);

    useEffect(() => {
        // Respect prefers-reduced-motion
        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (isInView && !hasAnimated.current) {
            hasAnimated.current = true;

            // Si l'utilisateur préfère moins d'animations, afficher directement la valeur finale
            if (prefersReduced) {
                setCount(target);
                return;
            }

            const startTime = performance.now();

            const animate = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Easing ease-out : ralentit vers la fin
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.round(eased * target);

                setCount(current);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        }
    }, [isInView, target, duration]);

    return (
        <span ref={ref} className={className}>
            {prefix}{count}{suffix}
        </span>
    );
}