"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    words.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(0, words.length, {
      duration: 1,
      ease: "easeOut",
      onUpdate(value) {
        count.set(value);
      },
    });

    return () => controls.stop();
  }, [words, count]);

  return (
    <div className={className}>
      <motion.span className="text-white">{displayText}</motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="inline-block w-[4px] h-4 bg-primary ml-0.5"
      />
    </div>
  );
}; 