"use client";
import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event: MouseEvent) => {
    if (!containerRef.current || !animate) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (event.clientX - left) / width;
    const y = (event.clientY - top) / height;
    setPosition({ x, y });
  };

  useEffect(() => {
    if (!animate) return;
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [animate]);

  const background = animate
    ? `radial-gradient(circle at ${position.x * 100}% ${
        position.y * 100
      }%, var(--primary) 0%, var(--primary-foreground) 25%, transparent 50%)`
    : `radial-gradient(circle at center, var(--primary) 0%, var(--primary-foreground) 25%, transparent 50%)`;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-full w-full overflow-hidden rounded-3xl p-[1px] backdrop-blur-xl",
        containerClassName
      )}
    >
      <div
        className="absolute inset-0 animate-pulse"
        style={{
          background,
          opacity: 0.5,
        }}
      />
      <div className={cn("relative h-full w-full rounded-3xl", className)}>
        {children}
      </div>
    </div>
  );
}; 