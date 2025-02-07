"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/utils/cn";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors = ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22c55e"],
  waveWidth = 50,
  backgroundFill = "black",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;
    contextRef.current = context;

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      if (!contextRef.current || !canvasRef.current) return;
      const ctx = contextRef.current;
      const canvas = canvasRef.current;

      // Set canvas size
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Fill background
      ctx.fillStyle = backgroundFill;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw waves
      colors.forEach((color, i) => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);

        for (let x = 0; x <= canvas.width; x += 1) {
          const relativeX = x / waveWidth;
          const t = time * (speed === "fast" ? 1 : 0.5);
          const y =
            Math.sin(relativeX + t + i * 0.5) * 20 +
            Math.sin(relativeX * 0.8 + t + i * 0.6) * 15 +
            canvas.height / 2;

          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();

        ctx.fillStyle = `${color}${Math.round(waveOpacity * 255).toString(16)}`;
        ctx.fill();
      });

      time += 0.01;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [colors, waveWidth, backgroundFill, speed, waveOpacity]);

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden rounded-md",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        style={{
          filter: `blur(${blur}px)`,
        }}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
}; 