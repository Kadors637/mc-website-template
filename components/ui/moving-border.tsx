"use client";
import { cn } from "@/utils/cn";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";

export const MovingBorder = ({
  children,
  duration = 2000,
  rx = 30,
  className,
  containerClassName,
  borderClassName,
  as: Component = "div",
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: any;
}) => {
  const pathRef = React.useRef<any>();
  const progress = useMotionValue(0);

  useAnimationFrame((time: number) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val)?.x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val)?.y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <Component className={cn("relative w-fit", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 w-full h-full",
          borderClassName
        )}
      >
        <svg
          viewBox="0 0 100 100"
          className="absolute w-full h-full"
          preserveAspectRatio="none"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <path
            ref={pathRef}
            d={`M 0,${rx} C 0,${rx * 0.5} ${rx * 0.5},0 ${rx},0 L ${100 - rx},0 C ${
              100 - rx * 0.5
            },0 100,${rx * 0.5} 100,${rx} L 100,${100 - rx} C 100,${
              100 - rx * 0.5
            } ${100 - rx * 0.5},100 ${100 - rx},100 L ${rx},100 C ${
              rx * 0.5
            },100 0,${100 - rx * 0.5} 0,${100 - rx} L 0,${rx}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-gray-200"
          />
        </svg>

        <motion.div
          style={{
            position: "absolute",
            transform,
          }}
          className="absolute h-4 w-4 rounded-full bg-gradient-to-r from-primary to-primary-foreground"
        />
      </div>

      <div className={className}>{children}</div>
    </Component>
  );
}; 