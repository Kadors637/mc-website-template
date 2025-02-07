"use client";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            aspectRatio: "1/1",
          }}
          className="absolute inset-auto z-50 h-32 w-64 rounded-full bg-gradient-to-r from-primary to-primary-foreground blur-2xl"
        />
        <div className="relative z-50 flex flex-col items-center px-5">
          {children}
        </div>
      </div>
      <div className="absolute inset-0 z-40 bg-slate-950 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="absolute inset-auto z-30 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-primary opacity-50 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.7,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="absolute inset-auto z-20 h-36 w-64 -translate-y-1/2 rounded-full bg-primary opacity-50 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.9,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="absolute inset-auto z-10 h-36 w-96 -translate-y-1/2 rounded-full bg-primary opacity-50 blur-3xl"
      />
    </div>
  );
}; 