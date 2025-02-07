"use client";
import React from 'react';
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const groups = [
  {
    title: "PvP Ustası",
    description: "PvP turnuvalarında en yüksek başarıları elde etmiş oyuncular",
    members: 25,
    requirements: "En az 100 PvP galibiyeti",
    header: <div className="flex flex-1 w-full h-48 bg-gradient-to-br from-red-500 to-orange-500" />,
  },
  {
    title: "İnşa Ekibi",
    description: "Sunucunun en yaratıcı yapı ustaları",
    members: 15,
    requirements: "En az 3 Build Battle birinciliği",
    header: <div className="flex flex-1 w-full h-48 bg-gradient-to-br from-blue-500 to-cyan-500" />,
  },
  {
    title: "Survival Ekibi",
    description: "Hayatta kalma konusunda uzmanlaşmış oyuncular",
    members: 30,
    requirements: "100+ saat oyun süresi",
    header: <div className="flex flex-1 w-full h-48 bg-gradient-to-br from-green-500 to-emerald-500" />,
  },
  {
    title: "Redstone Mühendisleri",
    description: "Kompleks redstone mekanizmaları yapan uzmanlar",
    members: 10,
    requirements: "5+ onaylanmış redstone projesi",
    header: <div className="flex flex-1 w-full h-48 bg-gradient-to-br from-purple-500 to-pink-500" />,
  },
  {
    title: "Yardım Ekibi",
    description: "Yeni oyunculara yardım eden gönüllü ekip",
    members: 20,
    requirements: "1000+ pozitif oyuncu geri bildirimi",
    header: <div className="flex flex-1 w-full h-48 bg-gradient-to-br from-yellow-500 to-orange-500" />,
  },
  {
    title: "Event Ekibi",
    description: "Sunucu etkinliklerini düzenleyen özel ekip",
    members: 8,
    requirements: "Başvuru ile alım",
    header: <div className="flex flex-1 w-full h-48 bg-gradient-to-br from-indigo-500 to-purple-500" />,
  },
];

export default function Groups() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="pt-8 pb-10">
          <MacbookScroll
            src="/images/groups-preview.png"
            showGradient
            title="Minecraft Grupları"
          />
        </div>

        <div className="text-center mb-12">
          <TextGenerateEffect
            words="Sunucumuzun özel gruplarına katılın ve ayrıcalıklı özelliklere sahip olun!"
          />
        </div>

        <BentoGrid className="mx-auto">
          {groups.map((group, i) => (
            <BentoGridItem
              key={i}
              title={group.title}
              description={`${group.description}\n\nÜye Sayısı: ${group.members}\nGereksinimler: ${group.requirements}`}
              header={group.header}
              className="cursor-pointer hover:scale-105 transition-transform duration-200"
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
} 