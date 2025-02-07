"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
}: {
  src: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      ref={containerRef}
      className="relative h-[300vh] py-40 overflow-hidden antialiased"
    >
      <div className="sticky top-0 flex items-center justify-center">
        <motion.div
          style={{
            scale,
            opacity,
            y: translate,
          }}
          className="relative"
        >
          {title && (
            <motion.div
              className="absolute top-[-80px] left-0 right-0 flex items-center justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <div className="px-4 py-1.5 rounded-full text-sm font-semibold bg-black text-white flex items-center gap-2">
                {badge && badge}
                {title}
              </div>
            </motion.div>
          )}
          <div className="macbook">
            <div className="screen">
              <div className="viewport" style={{ background: showGradient ? "linear-gradient(to bottom, #101010, #0a0a0a)" : "" }}>
                <Image
                  src={src}
                  className="h-full w-full object-cover object-left-top"
                  alt="Macbook viewport"
                  width={584}
                  height={365}
                />
              </div>
            </div>
            <div className="macbook-base" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 