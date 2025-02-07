"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;
}

export const SparklesCore = ({
  id,
  background,
  minSize,
  maxSize,
  particleDensity,
  particleColor,
  className,
  particleLife,
}: {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  className?: string;
  particleLife?: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const createParticle = (x: number, y: number): Particle => ({
      x,
      y,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * (maxSize || 4) + (minSize || 1),
      color: particleColor || "#FFFFFF",
      life: 0,
      maxLife: particleLife || 20,
    });

    const particleCount = particleDensity || 50;
    const initialParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      initialParticles.push(
        createParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        )
      );
    }

    setParticles(initialParticles);

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (background) {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      setParticles((currentParticles) =>
        currentParticles
          .map((particle) => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.life++;

            // Fade out
            const opacity = Math.max(
              0,
              1 - particle.life / particle.maxLife
            );

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `${particle.color}${Math.floor(opacity * 255).toString(16).padStart(2, "0")}`;
            ctx.fill();

            // Reset particle if it's dead or out of bounds
            if (
              particle.life >= particle.maxLife ||
              particle.x < 0 ||
              particle.x > canvas.width ||
              particle.y < 0 ||
              particle.y > canvas.height
            ) {
              return createParticle(
                Math.random() * canvas.width,
                Math.random() * canvas.height
              );
            }

            return particle;
          })
      );

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [background, maxSize, minSize, particleColor, particleDensity, particleLife]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn("absolute inset-0 h-full w-full", className)}
    />
  );
}; 