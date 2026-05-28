"use client";

import { useEffect, useState } from "react";

interface TechIcon {
  name: string;
  color: string;
  bgColor: string;
  borderColor: string;
  svg: React.ReactNode;
  offsetX: number; // in pixels
  offsetY: number; // in pixels
  dur: string;
  delay: string;
}

export default function FloatingIcons() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const icons: TechIcon[] = [
    {
      name: "React",
      color: "#61DAFB",
      bgColor: "rgba(97, 218, 251, 0.05)",
      borderColor: "rgba(97, 218, 251, 0.15)",
      dur: "4.5s",
      delay: "0s",
      offsetX: 0,
      offsetY: -280,
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" />
          <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
        </svg>
      ),
    },
    {
      name: "Next.js",
      color: "#ffffff",
      bgColor: "rgba(255, 255, 255, 0.05)",
      borderColor: "rgba(255, 255, 255, 0.15)",
      dur: "5.3s",
      delay: "0.4s",
      offsetX: 220,
      offsetY: -220,
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" strokeWidth="1" />
          <path d="M16 16.5L11.5 10v6.5H10V8h1.5l4.5 6.5V8H17.5v8.5H16z" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      color: "#3178C6",
      bgColor: "rgba(49, 120, 198, 0.05)",
      borderColor: "rgba(49, 120, 198, 0.15)",
      dur: "6.1s",
      delay: "0.8s",
      offsetX: 300,
      offsetY: -60,
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
          <path d="M14.5 9.5H11v1.5h1.5V17h1.5v-6H14.5v-2z" fill="white" />
          <path d="M8.5 9.5v1h1.5v5.5H11.5v-5.5h1.5v-1H8.5z" fill="white" />
        </svg>
      ),
    },
    {
      name: "Python",
      color: "#3776AB",
      bgColor: "rgba(55, 118, 171, 0.05)",
      borderColor: "rgba(55, 118, 171, 0.15)",
      dur: "6.9s",
      delay: "1.2s",
      offsetX: 280,
      offsetY: 120,
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M12 2C9.5 2 7.5 3 7.5 5v2H12v1H5.5C3.5 8 2 9.5 2 12s1.5 4 3.5 4H7v-2.5C7 11.5 9 10 12 10s5 1.5 5 3.5V16h1.5c2 0 3.5-1.5 3.5-4s-1.5-4-3.5-4H17V5C17 3 15 2 12 2z" fill="#3776AB" />
          <path d="M12 22c2.5 0 4.5-1 4.5-3v-2H12v-1h6.5c2 0 3.5-1.5 3.5-4s-1.5-4-3.5-4H17v2.5C17 12.5 15 14 12 14s-5-1.5-5-3.5V8H5.5C3.5 8 2 9.5 2 12s1.5 4 3.5 4H7v3c0 2 2 3 5 3z" fill="#FFD43B" />
          <circle cx="9.5" cy="5.5" r="0.8" fill="white" />
          <circle cx="14.5" cy="18.5" r="0.8" fill="white" />
        </svg>
      ),
    },
    {
      name: "Docker",
      color: "#2496ED",
      bgColor: "rgba(36, 150, 237, 0.05)",
      borderColor: "rgba(36, 150, 237, 0.15)",
      dur: "4.5s",
      delay: "1.6s",
      offsetX: 140,
      offsetY: 250,
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="#2496ED" strokeWidth="1.2">
          <path d="M3 12.5h18M3 9.5h18M5 6.5h14" />
          <rect x="6" y="4" width="2" height="2.5" fill="#2496ED" />
          <rect x="9" y="4" width="2" height="2.5" fill="#2496ED" />
          <rect x="12" y="4" width="2" height="2.5" fill="#2496ED" />
          <rect x="15" y="4" width="2" height="2.5" fill="#2496ED" />
          <path d="M19.5 12.5C21 12.5 22 11 22 9s-1-3.5-2.5-3.5S17 7 17 9s1 3.5 2.5 3.5z" fill="#2496ED" />
        </svg>
      ),
    },
    {
      name: "TensorFlow",
      color: "#FF9900",
      bgColor: "rgba(255, 153, 0, 0.05)",
      borderColor: "rgba(255, 153, 0, 0.15)",
      dur: "5.3s",
      delay: "2.0s",
      offsetX: -100,
      offsetY: 280,
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M12 2.5L3 7.5v9l9 5 9-5v-9l-9-5zm0 1.8l7 4v7.4l-7 3.8-7-3.8V8.3l7-4z" fill="#FF9900" />
          <path d="M12 6.5v11l5-2.7V9.2l-5-2.7z" fill="#FF9900" opacity="0.6" />
        </svg>
      ),
    },
    {
      name: "FastAPI",
      color: "#059669",
      bgColor: "rgba(5, 150, 105, 0.05)",
      borderColor: "rgba(5, 150, 105, 0.15)",
      dur: "6.1s",
      delay: "2.4s",
      offsetX: -260,
      offsetY: 150,
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <circle cx="12" cy="12" r="10" fill="none" stroke="#059669" strokeWidth="1.5" />
          <path d="M12 6l-4 7h3l-1 5 6-7h-4.5l.5-5z" fill="#059669" />
        </svg>
      ),
    },
    {
      name: "Git",
      color: "#F05032",
      bgColor: "rgba(240, 80, 50, 0.05)",
      borderColor: "rgba(240, 80, 50, 0.15)",
      dur: "6.9s",
      delay: "2.8s",
      offsetX: -300,
      offsetY: -60,
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M21.7 11.3l-9-9a1 1 0 00-1.4 0l-2 2 2.5 2.5a1.2 1.2 0 011.5 1.5l2.4 2.4a1.2 1.2 0 011.1 2 1.2 1.2 0 01-2.3-.5l-2.3-2.3v6a1.2 1.2 0 01.8 2.2 1.2 1.2 0 01-2.4 0 1.2 1.2 0 01.8-1.1V10a1.2 1.2 0 01-.8-1.6L9.9 6 2.3 13.7a1 1 0 000 1.4l9 9a1 1 0 001.4 0l9-9a1 1 0 000-1.7z" fill="#F05032" />
        </svg>
      ),
    },
    {
      name: "Convex",
      color: "#f59e0b",
      bgColor: "rgba(245, 158, 11, 0.05)",
      borderColor: "rgba(245, 158, 11, 0.15)",
      dur: "4.5s",
      delay: "3.2s",
      offsetX: -200,
      offsetY: -220,
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="#f59e0b" strokeWidth="1.5">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
          <path d="M12 22V12" />
          <path d="M22 7l-10 5L2 7" />
        </svg>
      ),
    },
  ];

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block overflow-hidden">
      {icons.map((icon) => (
        <div
          key={icon.name}
          className="absolute flex flex-col items-center gap-1.5 z-10 transition-opacity duration-1000 float-slow hover:scale-110 pointer-events-auto cursor-help group"
          style={{
            top: "50%",
            left: "50%",
            transform: `translate(calc(-50% + ${icon.offsetX}px), calc(-50% + ${icon.offsetY}px))`,
            animationDuration: icon.dur,
            animationDelay: icon.delay,
            animationName: "float",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          }}
        >
          {/* Glass Box */}
          <div
            className="w-11 h-11 rounded-2xl p-2.5 flex items-center justify-center transition-all duration-300 shadow-lg backdrop-blur-md"
            style={{
              backgroundColor: icon.bgColor,
              border: `1px solid ${icon.borderColor}`,
              boxShadow: `0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)`,
            }}
          >
            {icon.svg}
          </div>
          
          {/* Label */}
          <span
            className="text-[10px] font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium px-2 py-0.5 rounded-md glass text-text-secondary"
            style={{ color: icon.color }}
          >
            {icon.name}
          </span>
        </div>
      ))}
    </div>
  );
}
