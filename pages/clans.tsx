import { MainNav } from "@/components/ui/main-nav";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";

const clans = [
  {
    name: "Dragons",
    members: 25,
    level: 50,
    points: 15000,
    leader: "DragonMaster",
    description: "En eski ve güçlü klanlardan biri",
  },
  {
    name: "Phoenix",
    members: 20,
    level: 45,
    points: 12000,
    leader: "PhoenixKing",
    description: "PvP odaklı rekabetçi klan",
  },
  {
    name: "Warriors",
    members: 18,
    level: 40,
    points: 10000,
    leader: "WarChief",
    description: "Yeni oyunculara açık dostane klan",
  },
  {
    name: "Legends",
    members: 22,
    level: 42,
    points: 11000,
    leader: "LegendHero",
    description: "Build ve PvP dengeli klan",
  },
];

export default function Clans() {
  return (
    <div className="min-h-screen bg-dark-background text-white">
      <MainNav />
      
      <main className="container mx-auto px-4">
        <Spotlight className="pt-24 pb-12">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-github-hover bg-clip-text text-transparent">
                Klanlar
              </h1>
              <p className="mt-4 text-github-text">
                Aktif klanlar ve sıralamaları
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clans.map((clan, index) => (
                <motion.div
                  key={clan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-dark-card rounded-xl border border-github-border hover:border-primary transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold">{clan.name}</h3>
                      <p className="text-github-text mt-1">Lider: {clan.leader}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-primary font-bold">Level {clan.level}</span>
                      <p className="text-github-text text-sm">{clan.points} Puan</p>
                    </div>
                  </div>
                  <p className="mt-4 text-github-text">{clan.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-github-text">
                      {clan.members} Üye
                    </span>
                    <button className="px-4 py-2 text-sm rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                      Katıl
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Spotlight>
      </main>
    </div>
  );
} 