"use client";
import { useMotionValue, useTransform, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const textX = useTransform(x, [-100, 100], [-25, 25]);
  const textY = useTransform(y, [-100, 100], [-25, 25]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      onMouseMove={(e) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        const halfWidth = rect.width / 2;
        const halfHeight = rect.height / 2;
        x.set((e.clientX - rect.left - halfWidth) / 2);
        y.set((e.clientY - rect.top - halfHeight) / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={cn(
        "relative h-[30rem] w-[30rem] overflow-hidden rounded-xl bg-transparent",
        className
      )}
    >
      {children}
      <motion.div
        style={{
          x: textX,
          y: textY,
        }}
        className="absolute inset-0 flex items-center justify-center text-center"
      >
        <div className="relative flex flex-col items-center justify-center">
          <h1 className="mb-2 text-6xl font-bold text-white [text-shadow:_0_4px_0_rgb(0_0_0_/_50%)]">
            {text}
          </h1>
          <h2 className="text-2xl font-light text-white/80">
            {revealText}
          </h2>
        </div>
      </motion.div>
    </div>
  );
}; 