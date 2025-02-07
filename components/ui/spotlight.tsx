"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

export const Spotlight = ({
  children,
  className,
  size = 600,
}: {
  children: React.ReactNode;
  className?: string;
  size?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;

      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();

      const x = event.clientX - left;
      const y = event.clientY - top;

      if (
        x < 0 ||
        x > width ||
        y < 0 ||
        y > height
      ) {
        setOpacity(0);
      } else {
        setOpacity(1);
      }

      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden bg-black",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 z-50 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
}; 