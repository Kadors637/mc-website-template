"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  className,
  title,
  subtitle,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    avatar: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
  title?: string;
  subtitle?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
    
    // Animasyonu sıfırla ve yeniden başlat
    const resetAnimation = () => {
      if (scrollerRef.current) {
        scrollerRef.current.style.animation = 'none';
        scrollerRef.current.offsetHeight; // Reflow
        scrollerRef.current.style.animation = '';
      }
    };

    if (scrollerRef.current) {
      scrollerRef.current.addEventListener('animationend', resetAnimation);
    }

    return () => {
      if (scrollerRef.current) {
        scrollerRef.current.removeEventListener('animationend', resetAnimation);
      }
    };
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Her öğeyi iki kez kopyala
      scrollerContent.forEach((item) => {
        const duplicatedItem1 = item.cloneNode(true);
        const duplicatedItem2 = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem1);
        scrollerRef.current?.appendChild(duplicatedItem2);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const speedOptions = {
        fast: "40s",
        normal: "60s",
        slow: "40s",
      };
      containerRef.current.style.setProperty(
        "--animation-duration",
        speedOptions[speed]
      );
    }
  };

  return (
    <div className="py-20">
      {(title || subtitle) && (
        <div className="text-center mb-16">
          {title && (
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
              <span className="absolute -inset-2 blur-xl bg-primary/20 rounded-full"></span>
              <span className="relative">{title}</span>
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 max-w-7xl overflow-hidden mx-auto",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full gap-4 py-4 w-max flex-nowrap",
            start && "animate-scroll"
          )}
        >
          {items.map((item, idx) => (
            <li
              key={`${item.name}-${idx}`}
              className="w-[350px] max-w-full relative rounded-2xl border border-white/10 flex-shrink-0 px-8 py-6 md:w-[450px] bg-black/60 backdrop-blur-sm hover:bg-black/80 transition-colors"
            >
              <blockquote>
                <div className="relative z-20 text-base leading-[1.6] text-gray-100 font-normal mb-4">
                  {item.quote}
                </div>
                <div className="relative z-20 flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-semibold text-white">
                      {item.name}
                    </span>
                    <span className="text-sm text-primary">
                      {item.title}
                    </span>
                  </div>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}; 