import Navbar from "@/components/ui/navbar";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const groupsData = {
  servers: [
    {
      name: "Survival",
      version: "1.20.1",
      players: "250/500",
      description: "Vanilla survival deneyimi",
      status: "online",
      features: ["PvE", "Economy", "Land Claim", "Custom Enchants"],
      ip: "survival.mcserver.com",
      color: "from-green-500 to-emerald-700",
      icon: "🌳",
    },
    {
      name: "SkyBlock",
      version: "1.20.1",
      players: "180/300",
      description: "Özel adalarınızı oluşturun",
      status: "online",
      features: ["Island Levels", "Minions", "Custom Islands", "Trading"],
      ip: "skyblock.mcserver.com",
      color: "from-blue-500 to-cyan-700",
      icon: "🏝️",
    },
  ],
  clans: [
    {
      name: "Dragons",
      members: 25,
      level: 50,
      points: 15000,
      leader: "DragonMaster",
      description: "En eski ve güçlü klanlardan biri",
      color: "from-red-500 to-rose-700",
    },
    {
      name: "Phoenix",
      members: 20,
      level: 45,
      points: 12000,
      leader: "PhoenixKing",
      description: "PvP odaklı rekabetçi klan",
      color: "from-orange-500 to-amber-700",
    },
  ],
  communities: [
    {
      name: "Builders United",
      members: 150,
      type: "Build",
      leader: "MasterBuilder",
      description: "Minecraft yapı ve tasarım topluluğu",
      color: "from-yellow-500 to-amber-700",
    },
    {
      name: "PvP Masters",
      members: 200,
      type: "Combat",
      leader: "BattleMaster",
      description: "PvP odaklı oyuncu topluluğu",
      color: "from-purple-500 to-indigo-700",
    },
  ],
};

const titles = {
  servers: "Sunucular",
  clans: "Klanlar",
  communities: "Topluluklar",
};

const descriptions = {
  servers: "Farklı oyun modları ve özel içeriklerle dolu sunucularımızda benzersiz bir Minecraft deneyimi yaşayın.",
  clans: "Güçlü klanlarımıza katılın veya kendi klanınızı oluşturun.",
  communities: "İlgi alanlarınıza göre topluluklara katılın ve yeni arkadaşlar edinin.",
};

export default function GroupPage() {
  const router = useRouter();
  const { type } = router.query;
  const groupType = type as keyof typeof groupsData;

  if (!groupType || !groupsData[groupType]) {
    return <div>Loading...</div>;
  }

  const renderContent = () => {
    switch (groupType) {
      case "servers":
        return groupsData.servers.map((server, index) => (
          <motion.div
            key={server.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${server.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 h-full flex flex-col">
              <div className="absolute top-4 right-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  server.status === 'online' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/20'
                    : 'bg-red-500/20 text-red-400 border border-red-500/20'
                }`}>
                  <span className={`w-2 h-2 rounded-full mr-1.5 ${
                    server.status === 'online' ? 'bg-green-400' : 'bg-red-400'
                  }`} />
                  {server.status.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${server.color} text-2xl`}>
                  {server.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{server.name}</h2>
                  <p className="text-sm text-gray-400">Version {server.version}</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">{server.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {server.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Online Oyuncular</span>
                  <span className="text-sm text-white font-medium">{server.players}</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-6">
                  <div 
                    className={`h-full bg-gradient-to-r ${server.color} transition-all duration-500`}
                    style={{ 
                      width: `${(parseInt(server.players.split('/')[0]) / parseInt(server.players.split('/')[1])) * 100}%` 
                    }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <code className="px-3 py-1 text-sm bg-white/5 rounded-lg text-gray-400 select-all">
                    {server.ip}
                  </code>
                  <button className={`px-4 py-2 rounded-lg bg-gradient-to-r ${server.color} text-white font-medium hover:opacity-90 transition-opacity`}>
                    Bağlan
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ));

      case "clans":
        return groupsData.clans.map((clan, index) => (
          <motion.div
            key={clan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${clan.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-white">{clan.name}</h2>
                  <p className="text-gray-400">Lider: {clan.leader}</p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold text-white">Level {clan.level}</span>
                  <p className="text-gray-400">{clan.points} Puan</p>
                </div>
              </div>
              <p className="mt-4 text-gray-400">{clan.description}</p>
              <div className="mt-6 flex justify-between items-center">
                <span className="text-gray-400">{clan.members} Üye</span>
                <button className={`px-4 py-2 rounded-lg bg-gradient-to-r ${clan.color} text-white font-medium hover:opacity-90 transition-opacity`}>
                  Katıl
                </button>
              </div>
            </div>
          </motion.div>
        ));

      case "communities":
        return groupsData.communities.map((community, index) => (
          <motion.div
            key={community.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${community.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-white">{community.name}</h2>
                  <p className="text-gray-400">Yönetici: {community.leader}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white">
                  {community.type}
                </span>
              </div>
              <p className="mt-4 text-gray-400">{community.description}</p>
              <div className="mt-6 flex justify-between items-center">
                <span className="text-gray-400">{community.members} Üye</span>
                <button className={`px-4 py-2 rounded-lg bg-gradient-to-r ${community.color} text-white font-medium hover:opacity-90 transition-opacity`}>
                  Katıl
                </button>
              </div>
            </div>
          </motion.div>
        ));
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            {titles[groupType]}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {descriptions[groupType]}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
} 