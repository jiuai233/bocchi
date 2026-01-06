"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

interface GlitchTextProps {
    text: string;
    className?: string;
    as?: React.ElementType;
}

export default function GlitchText({ text, className, as: Component = "h1" }: GlitchTextProps) {
    return (
        <div className={clsx("relative inline-block group", className)}>
            <Component className="relative z-10">{text}</Component>
            {/* Glitch Layer 1 - Red/Cyan offset */}
            <Component
                className="absolute top-0 left-0 -z-10 w-full h-full opacity-0 group-hover:opacity-100 group-hover:animate-glitch text-kita-red mix-blend-screen"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)", transform: "translate(-2px, -2px)" }}
                aria-hidden="true"
            >
                {text}
            </Component>
            {/* Glitch Layer 2 - Blue offset */}
            <Component
                className="absolute top-0 left-0 -z-10 w-full h-full opacity-0 group-hover:opacity-100 group-hover:animate-glitch text-ryo-blue mix-blend-screen"
                style={{ clipPath: "polygon(0 80%, 100% 20%, 100% 100%, 0 100%)", transform: "translate(2px, 2px)", animationDelay: "0.1s" }}
                aria-hidden="true"
            >
                {text}
            </Component>
            {/* Glitch Layer 3 - Random flicker */}
            <Component
                className="absolute top-0 left-0 -z-10 w-full h-full opacity-0 group-hover:opacity-50 text-nijika-yellow mix-blend-overlay"
                style={{ transform: "translate(-1px, 1px)", animationDelay: "0.2s" }}
                aria-hidden="true"
            >
                {text}
            </Component>
        </div>
    );
}
