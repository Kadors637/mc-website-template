"use client";
import React from 'react';
import { MainNav } from "@/components/ui/main-nav";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const items = [
  {
    title: "Elmas Set",
    description: "Tam koruma sağlayan elmas zırh seti ve silahlar",
    price: "5000",
    category: "Zırh & Silah",
    header: <div className="flex flex-1 w-full h-48 bg-gradient-to-br from-blue-500 to-cyan-500" />,
  },
  {
    title: "XP Boost",
    description: "1 saat boyunca 2x XP kazanın",
    price: "2500",
    category: "Boost",
    header: <div className="flex flex-1 w-full h-48 bg-gradient-to-br from-green-500 to-emerald-500" />,
  },
  {
    title: "Özel Eşya Sandığı",
    description: "Nadir eşyalar içeren sürpriz sandık",
    price: "7500",
    category: "Sandık",
    header: <div className="flex flex-1 w-full h-48 bg-gradient-to-br from-purple-500 to-pink-500" />,
  },
  {
    title: "Uçuş İksiri",
    description: "30 dakika uçma yeteneği",
    price: "10000",
    category: "İksir",
    header: <div className="flex flex-1 w-full h-48 bg-gradient-to-br from-yellow-500 to-orange-500" />,
  },
  {
    title: "Özel Skin Paketi",
    description: "5 adet özel karakter skini",
    price: "15000",
    category: "Kozmetik",
    header: <div className="flex flex-1 w-full h-48 bg-gradient-to-br from-red-500 to-pink-500" />,
  },
  {
    title: "Ev Şablonu",
    description: "Hazır ev şablonları koleksiyonu",
    price: "20000",
    category: "İnşa",
    header: <div className="flex flex-1 w-full h-48 bg-gradient-to-br from-indigo-500 to-purple-500" />,
  },
];

export default function Market() {
  return (
    <div className="min-h-screen bg-black">
      <div className="h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.05] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <MainNav />
        
        <div className="pt-20 pb-10 px-4">
          <TextRevealCard
            text="Sunucu Marketi"
            revealText="En İyi Eşyalar"
          >
            <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-black">
              <p className="text-base sm:text-xl text-white mt-4 font-light">
                Sunucumuzun resmi marketine hoş geldiniz! Burada ihtiyacınız olan her şeyi bulabilirsiniz.
              </p>
            </BackgroundGradient>
          </TextRevealCard>
        </div>

        <div className="px-4 py-12 md:px-6">
          <BentoGrid className="mx-auto">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={`${item.description}\nFiyat: ${item.price} Coin`}
                header={item.header}
                className="cursor-pointer hover:scale-105 transition-transform duration-200"
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </div>
  );
} 