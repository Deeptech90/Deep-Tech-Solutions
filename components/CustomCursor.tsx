"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  const springConfig = { damping: 22, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(dotX, springConfig);
  const smoothY = useSpring(dotY, springConfig);

  const ringSpringConfig = { damping: 28, stiffness: 150, mass: 0.8 };
  const smoothRingX = useSpring(ringX, ringSpringConfig);
  const smoothRingY = useSpring(ringY, ringSpringConfig);

  const isVisible = useRef(false);

  useEffect(() => {
    // Only activate on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [dotX, dotY, ringX, ringY]);

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="cursor-dot"
        style={{ x: smoothX, y: smoothY }}
        aria-hidden="true"
      />
      {/* Outer ring */}
      <motion.div
        className="cursor-ring"
        style={{ x: smoothRingX, y: smoothRingY }}
        aria-hidden="true"
      />
    </>
  );
}
