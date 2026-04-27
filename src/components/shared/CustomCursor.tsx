"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Uniquement sur desktop
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const handleMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleEnterInteractive = () => setIsHovering(true);
        const handleLeaveInteractive = () => setIsHovering(false);
        const handleLeaveWindow = () => setIsVisible(false);
        const handleEnterWindow = () => setIsVisible(true);

        // Éléments interactifs
        const interactives = document.querySelectorAll(
            "a, button, [role='button'], input, textarea, select"
        );

        interactives.forEach((el) => {
            el.addEventListener("mouseenter", handleEnterInteractive);
            el.addEventListener("mouseleave", handleLeaveInteractive);
        });

        window.addEventListener("mousemove", handleMove);
        document.addEventListener("mouseleave", handleLeaveWindow);
        document.addEventListener("mouseenter", handleEnterWindow);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            document.removeEventListener("mouseleave", handleLeaveWindow);
            document.removeEventListener("mouseenter", handleEnterWindow);
            interactives.forEach((el) => {
                el.removeEventListener("mouseenter", handleEnterInteractive);
                el.removeEventListener("mouseleave", handleLeaveInteractive);
            });
        };
    }, [isVisible]);

    if (typeof window !== "undefined" &&
        window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <>
            {/* Curseur principal — petit rond or */}
            <div
                className="fixed pointer-events-none z-[9999] rounded-full transition-transform duration-100"
                style={{
                    left: position.x,
                    top: position.y,
                    width: "12px",
                    height: "12px",
                    backgroundColor: "#C9A96E",
                    border: "none",
                    transform: "translate(-50%, -50%)",
                    transition: "width 0.2s ease, height 0.2s ease, background-color 0.2s ease",
                    opacity: isVisible ? 1 : 0,
                }}
            />

            {/* Style global pour cacher le curseur natif */}
            <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
        </>
    );
}