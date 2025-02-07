"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";

const kits = [
  { id: "discord", icon: "🎮", label: "Discord" },
  { id: "potion", icon: "⚗️", label: "Potion" },
  { id: "heart", icon: "❤️", label: "Heart" },
  { id: "crystal", icon: "💎", label: "Crystal" },
  { id: "sword", icon: "⚔️", label: "Sword" },
  { id: "axe", icon: "🪓", label: "Axe" }
];

interface Player {
  id: string;
  name: string;
  discordTag: string;
  rank: "S" | "A" | "B" | "C";
  avatar: string;
  stats: {
    wins: number;
    losses: number;
    winRate: number;
    kills: number;
    deaths: number;
    kdr: number;
  };
}

const players: Player[] = [
  {
    id: "1",
    name: "DragonSlayer",
    discordTag: "dragon#1234",
    rank: "S",
    avatar: "/discord-avatar.png",
    stats: {
      wins: 150,
      losses: 20,
      winRate: 88.2,
      kills: 750,
      deaths: 200,
      kdr: 3.75
    }
  },
  {
    id: "2",
    name: "PvPMaster",
    discordTag: "pvp#5678",
    rank: "A",
    avatar: "/discord-avatar.png",
    stats: {
      wins: 120,
      losses: 30,
      winRate: 80.0,
      kills: 600,
      deaths: 250,
      kdr: 2.4
    }
  },
  {
    id: "3",
    name: "CrystalKing",
    discordTag: "crystal#9012",
    rank: "S",
    avatar: "/discord-avatar.png",
    stats: {
      wins: 140,
      losses: 25,
      winRate: 84.8,
      kills: 700,
      deaths: 220,
      kdr: 3.18
    }
  },
  {
    id: "4",
    name: "BeastHunter",
    discordTag: "beast#3456",
    rank: "B",
    avatar: "/discord-avatar.png",
    stats: {
      wins: 90,
      losses: 40,
      winRate: 69.2,
      kills: 450,
      deaths: 300,
      kdr: 1.5
    }
  },
  {
    id: "5",
    name: "GappleWarrior",
    discordTag: "gapple#7890",
    rank: "A",
    avatar: "/discord-avatar.png",
    stats: {
      wins: 110,
      losses: 35,
      winRate: 75.9,
      kills: 550,
      deaths: 280,
      kdr: 1.96
    }
  },
  {
    id: "6",
    name: "ShieldMaster",
    discordTag: "shield#1234",
    rank: "C",
    avatar: "/discord-avatar.png",
    stats: {
      wins: 70,
      losses: 50,
      winRate: 58.3,
      kills: 350,
      deaths: 320,
      kdr: 1.09
    }
  }
];

const rankColors = {
  S: "bg-yellow-500",
  A: "bg-cyan-500",
  B: "bg-green-500",
  C: "bg-orange-500"
};

export default function TierListPage() {
  const [selectedKit, setSelectedKit] = useState(kits[0].id);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  return (
    <div className="min-h-screen bg-black">
      <div className="h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.05] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <h1 className="text-4xl font-bold text-center text-white mb-8">Oyuncu Listesi</h1>

          {/* Kit Seçimi */}
          <div className="flex justify-center gap-2 p-2 bg-[#151515] rounded-xl border border-white/10 mb-8">
            {kits.map((kit) => (
              <button
                key={kit.id}
                onClick={() => setSelectedKit(kit.id)}
                className={cn(
                  "p-3 rounded-lg transition-all",
                  selectedKit === kit.id
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                <span className="text-2xl">{kit.icon}</span>
              </button>
            ))}
          </div>

          {/* Oyuncu Listesi */}
          <div className="space-y-2">
            {players.map((player) => (
              <div
                key={player.id}
                onClick={() => setSelectedPlayer(player)}
                className="flex items-center justify-between p-4 bg-[#151515] rounded-xl border border-white/10 cursor-pointer hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10">
                    <Image
                      src={player.avatar}
                      alt={player.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{player.name}</h3>
                    <p className="text-white/60 text-sm">{player.discordTag}</p>
                  </div>
                </div>
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center text-black font-bold",
                  rankColors[player.rank]
                )}>
                  {player.rank}
                </div>
              </div>
            ))}
          </div>

          {/* Oyuncu Detay Popup */}
          <AnimatePresence>
            {selectedPlayer && (
              <div
                className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
                onClick={() => setSelectedPlayer(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-[#151515] rounded-xl p-6 max-w-md w-full border border-white/10"
                  onClick={e => e.stopPropagation()}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-white/10">
                      <Image
                        src={selectedPlayer.avatar}
                        alt={selectedPlayer.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">{selectedPlayer.name}</h2>
                      <p className="text-white/60">{selectedPlayer.discordTag}</p>
                    </div>
                    <div className={cn(
                      "ml-auto w-10 h-10 rounded-xl flex items-center justify-center text-black font-bold",
                      rankColors[selectedPlayer.rank]
                    )}>
                      {selectedPlayer.rank}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/30 rounded-lg p-4">
                      <p className="text-white/60 text-sm mb-1">Galibiyet / Mağlubiyet</p>
                      <p className="text-white font-bold">{selectedPlayer.stats.wins} / {selectedPlayer.stats.losses}</p>
                      <p className="text-primary text-sm">%{selectedPlayer.stats.winRate} Kazanma</p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4">
                      <p className="text-white/60 text-sm mb-1">Öldürme / Ölme</p>
                      <p className="text-white font-bold">{selectedPlayer.stats.kills} / {selectedPlayer.stats.deaths}</p>
                      <p className="text-primary text-sm">{selectedPlayer.stats.kdr} KD Oranı</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
} 