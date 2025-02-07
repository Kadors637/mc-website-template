import { MainNav } from "@/components/ui/main-nav";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const kits = [
  "warrior", "archer", "mage", "tank", "assassin", "support", "berserker", "scout"
];

const tiers = [
  { name: "HT 1", color: "from-purple-600 to-purple-900" },
  { name: "LT 1", color: "from-blue-600 to-blue-900" },
  { name: "HT 2", color: "from-indigo-600 to-indigo-900" },
  { name: "LT 2", color: "from-cyan-600 to-cyan-900" },
  { name: "HT 3", color: "from-teal-600 to-teal-900" },
  { name: "LT 3", color: "from-green-600 to-green-900" },
  { name: "HT 4", color: "from-emerald-600 to-emerald-900" },
  { name: "LT 4", color: "from-yellow-600 to-yellow-900" }
];

interface Player {
  name: string;
  gameNick: string;
  discordTag: string;
  tier: string;
  avatar: string;
}

// Her tier için 5 oyuncu oluşturan yardımcı fonksiyon
const generatePlayersForTier = (kitPrefix: string, tier: string): Player[] => {
  return Array.from({ length: 5 }, (_, i) => ({
    name: `${kitPrefix}${i + 1}`,
    gameNick: `${kitPrefix}${i + 1}_Pro`,
    discordTag: `${kitPrefix}${i + 1}#${1234 + i}`,
    tier,
    avatar: "/avatars/default.png"
  }));
};

// Her kit için tüm tier'lara 5'er oyuncu ekle
const playerData: Record<string, Player[]> = {
  "Warrior": [
    ...generatePlayersForTier("Warrior", "HT 1"),
    ...generatePlayersForTier("Warrior", "LT 1"),
    ...generatePlayersForTier("Warrior", "HT 2"),
    ...generatePlayersForTier("Warrior", "LT 2"),
    ...generatePlayersForTier("Warrior", "HT 3"),
    ...generatePlayersForTier("Warrior", "LT 3"),
    ...generatePlayersForTier("Warrior", "HT 4"),
    ...generatePlayersForTier("Warrior", "LT 4")
  ],
  "Archer": [
    ...generatePlayersForTier("Archer", "HT 1"),
    ...generatePlayersForTier("Archer", "LT 1"),
    ...generatePlayersForTier("Archer", "HT 2"),
    ...generatePlayersForTier("Archer", "LT 2"),
    ...generatePlayersForTier("Archer", "HT 3"),
    ...generatePlayersForTier("Archer", "LT 3"),
    ...generatePlayersForTier("Archer", "HT 4"),
    ...generatePlayersForTier("Archer", "LT 4")
  ],
  "Mage": [
    ...generatePlayersForTier("Mage", "HT 1"),
    ...generatePlayersForTier("Mage", "LT 1"),
    ...generatePlayersForTier("Mage", "HT 2"),
    ...generatePlayersForTier("Mage", "LT 2"),
    ...generatePlayersForTier("Mage", "HT 3"),
    ...generatePlayersForTier("Mage", "LT 3"),
    ...generatePlayersForTier("Mage", "HT 4"),
    ...generatePlayersForTier("Mage", "LT 4")
  ],
  "Tank": [
    ...generatePlayersForTier("Tank", "HT 1"),
    ...generatePlayersForTier("Tank", "LT 1"),
    ...generatePlayersForTier("Tank", "HT 2"),
    ...generatePlayersForTier("Tank", "LT 2"),
    ...generatePlayersForTier("Tank", "HT 3"),
    ...generatePlayersForTier("Tank", "LT 3"),
    ...generatePlayersForTier("Tank", "HT 4"),
    ...generatePlayersForTier("Tank", "LT 4")
  ],
  "Assassin": [
    ...generatePlayersForTier("Assassin", "HT 1"),
    ...generatePlayersForTier("Assassin", "LT 1"),
    ...generatePlayersForTier("Assassin", "HT 2"),
    ...generatePlayersForTier("Assassin", "LT 2"),
    ...generatePlayersForTier("Assassin", "HT 3"),
    ...generatePlayersForTier("Assassin", "LT 3"),
    ...generatePlayersForTier("Assassin", "HT 4"),
    ...generatePlayersForTier("Assassin", "LT 4")
  ],
  "Support": [
    ...generatePlayersForTier("Support", "HT 1"),
    ...generatePlayersForTier("Support", "LT 1"),
    ...generatePlayersForTier("Support", "HT 2"),
    ...generatePlayersForTier("Support", "LT 2"),
    ...generatePlayersForTier("Support", "HT 3"),
    ...generatePlayersForTier("Support", "LT 3"),
    ...generatePlayersForTier("Support", "HT 4"),
    ...generatePlayersForTier("Support", "LT 4")
  ],
  "Berserker": [
    ...generatePlayersForTier("Berserker", "HT 1"),
    ...generatePlayersForTier("Berserker", "LT 1"),
    ...generatePlayersForTier("Berserker", "HT 2"),
    ...generatePlayersForTier("Berserker", "LT 2"),
    ...generatePlayersForTier("Berserker", "HT 3"),
    ...generatePlayersForTier("Berserker", "LT 3"),
    ...generatePlayersForTier("Berserker", "HT 4"),
    ...generatePlayersForTier("Berserker", "LT 4")
  ],
  "Scout": [
    ...generatePlayersForTier("Scout", "HT 1"),
    ...generatePlayersForTier("Scout", "LT 1"),
    ...generatePlayersForTier("Scout", "HT 2"),
    ...generatePlayersForTier("Scout", "LT 2"),
    ...generatePlayersForTier("Scout", "HT 3"),
    ...generatePlayersForTier("Scout", "LT 3"),
    ...generatePlayersForTier("Scout", "HT 4"),
    ...generatePlayersForTier("Scout", "LT 4")
  ]
};

export default function KitTierListPage() {
  const router = useRouter();
  const { kit } = router.query;
  const [activeTier, setActiveTier] = useState<string | null>(null);

  // Kit adını büyük harfle başlat
  const kitName = typeof kit === 'string' ? kit.charAt(0).toUpperCase() + kit.slice(1) : '';

  // Seçili tier'ın oyuncularını getir
  const selectedTierPlayers = activeTier 
    ? playerData[kitName as keyof typeof playerData]?.filter(player => player.tier === activeTier) 
    : [];

  return (
    <div className="min-h-screen bg-black relative">
      {/* Grid arka plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #ffffff15 1px, transparent 1px),
                           linear-gradient(to bottom, #ffffff15 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <MainNav />
      
      <main className="container mx-auto px-4 pt-24 relative">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            {kitName} Tier List
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {kitName} sınıfı oyuncu sıralaması
          </p>
        </div>

        {/* Tier Seçimi */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          {tiers.map((tier) => (
            <button
              key={tier.name}
              onClick={() => setActiveTier(activeTier === tier.name ? null : tier.name)}
              className={`
                px-6 py-3 rounded-lg text-lg font-bold transition-all duration-300
                ${activeTier === tier.name 
                  ? `bg-gradient-to-r ${tier.color} text-white scale-105 shadow-lg` 
                  : 'bg-[#0a0a0a] text-gray-400 hover:bg-[#151515] hover:text-white'
                }
              `}
            >
              {tier.name}
            </button>
          ))}
        </div>

        {/* Seçili Tier'ın Oyuncuları */}
        {activeTier && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-[#0a0a0a] rounded-lg border border-white/10 overflow-hidden"
          >
            <div className={`bg-gradient-to-r ${tiers.find(t => t.name === activeTier)?.color} p-4 flex items-center gap-4`}>
              <span className="text-2xl font-bold text-white">{activeTier}</span>
              <div className="h-px flex-1 bg-white/20" />
              <span className="text-sm text-white/80">{selectedTierPlayers.length} Oyuncu</span>
            </div>
            
            <div className="divide-y divide-white/10">
              {selectedTierPlayers.map((player) => (
                <div
                  key={player.name}
                  className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#151515] overflow-hidden flex-shrink-0">
                      <div className="w-full h-full flex items-center justify-center text-2xl">
                        👤
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{player.gameNick}</h3>
                      <p className="text-sm text-gray-400">{player.discordTag}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm text-gray-400">Sıralama</p>
                      <p className="text-lg font-bold text-white">{activeTier}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tier Seçilmediğinde Gösterilecek Mesaj */}
        {!activeTier && (
          <div className="text-center text-gray-400 mt-12">
            <p className="text-lg">Oyuncuları görmek için bir tier seçin</p>
          </div>
        )}
      </main>
    </div>
  );
} 