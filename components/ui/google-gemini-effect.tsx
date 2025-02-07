"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/utils/cn";

export const GoogleGeminiEffect = ({
  className,
  containerClassName,
  circles,
  children,
}: {
  className?: string;
  containerClassName?: string;
  circles?: {
    x: number;
    y: number;
    size: number;
  }[];
  children?: React.ReactNode;
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const defaultCircles = [
    { x: 10, y: 10, size: 20 },
    { x: 30, y: 30, size: 15 },
    { x: 50, y: 50, size: 25 },
    { x: 70, y: 70, size: 18 },
    { x: 90, y: 90, size: 22 },
  ];

  const renderCircles = circles || defaultCircles;

  return (
    <div
      className={cn(
        "relative h-48 w-full overflow-hidden bg-slate-900",
        containerClassName
      )}
      ref={ref}
    >
      {renderCircles.map((circle, idx) => (
        <motion.div
          key={`circle-${idx}`}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={controls}
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: idx * 0.1,
              },
            },
          }}
          style={{
            position: "absolute",
            top: `${circle.y}%`,
            left: `${circle.x}%`,
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            borderRadius: "50%",
            backgroundColor: "rgba(74, 222, 128, 0.2)",
            boxShadow: "0 0 20px 2px rgba(74, 222, 128, 0.3)",
          }}
          className="pointer-events-none"
        />
      ))}
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}; 