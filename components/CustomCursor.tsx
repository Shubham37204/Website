"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  useEffect(() => {
    // Hide cursor on touch devices
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setHidden(false);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.style.cursor === "pointer" ||
        target.classList.contains("clickable");
      
      setIsHoveringClickable(!!isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Smooth trail effect
  useEffect(() => {
    let animationFrameId: number;
    
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        // Ease speed
        const ease = 0.15;
        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease,
        };
      });
      animationFrameId = requestAnimationFrame(updateTrail);
    };

    animationFrameId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (hidden) return null;

  return (
    <>
      {/* Outer Halo */}
      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[99999] transition-transform duration-75 mix-blend-screen"
        style={{
          transform: `translate3d(${trail.x - 16}px, ${trail.y - 16}px, 0) scale(${
            clicked ? 0.8 : isHoveringClickable ? 1.5 : 1
          })`,
          border: isHoveringClickable
            ? "1.5px solid rgba(245, 158, 11, 0.7)"
            : "1px solid rgba(245, 158, 11, 0.25)",
          backgroundColor: isHoveringClickable
            ? "rgba(245, 158, 11, 0.05)"
            : "rgba(255, 255, 255, 0.01)",
          boxShadow: isHoveringClickable
            ? "0 0 15px rgba(245, 158, 11, 0.2)"
            : "none",
        }}
      />
      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[99999] bg-accent mix-blend-screen"
        style={{
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
          boxShadow: "0 0 8px #f59e0b",
        }}
      />
    </>
  );
}
