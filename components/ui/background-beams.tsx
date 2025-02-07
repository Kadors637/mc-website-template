"use client";
import React from "react";
import { cn } from "@/utils/cn";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div className={cn("h-full w-full bg-black", className)}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          {/* Gradient beams */}
          <div className="absolute top-0 -left-4 w-[800px] h-[600px] bg-gradient-to-r from-primary/50 to-transparent blur-[100px] transform -rotate-45" />
          <div className="absolute bottom-0 -right-4 w-[800px] h-[600px] bg-gradient-to-l from-primary/50 to-transparent blur-[100px] transform rotate-45" />
        </div>
      </div>
    </div>
  );
}; 