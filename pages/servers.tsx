import Navbar from "@/components/ui/navbar";
import { motion } from "framer-motion";

const servers = [
  {
    name: "Survival",
    version: "1.20.1",
    players: "250/500",
    description: "Vanilla survival deneyimi",
    status: "online",
    features: ["PvE", "Economy", "Land Claim", "Custom Enchants"],
    ip: "survival.mcserver.com",
    logo: "/server-logos/survival.png",
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
    logo: "/server-logos/skyblock.png",
    color: "from-blue-500 to-cyan-700",
    icon: "🏝️",
  },
  {
    name: "Factions",
    version: "1.20.1",
    players: "120/200",
    description: "PvP ve klan savaşları",
    status: "online",
    features: ["PvP", "Raiding", "Custom Items", "Weekly Events"],
    ip: "factions.mcserver.com",
    logo: "/server-logos/factions.png",
    color: "from-red-500 to-rose-700",
    icon: "⚔️",
  },
];

export default function Servers() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Sunucularımız
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Farklı oyun modları ve özel içeriklerle dolu sunucularımızda benzersiz bir Minecraft deneyimi yaşayın.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {servers.map((server, index) => (
            <motion.div
              key={server.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden"
            >
              {/* Card Background with Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${server.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
              
              {/* Main Card */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 h-full flex flex-col">
                {/* Server Status Badge */}
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

                {/* Server Icon and Name */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${server.color} text-2xl`}>
                    {server.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{server.name}</h2>
                    <p className="text-sm text-gray-400">Version {server.version}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6">{server.description}</p>

                {/* Features */}
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

                {/* Server Stats */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Online Oyuncular</span>
                    <span className="text-sm text-white font-medium">{server.players}</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-6">
                    <div 
                      className={`h-full bg-gradient-to-r ${server.color} transition-all duration-500`}
                      style={{ 
                        width: `${(parseInt(server.players.split('/')[0]) / parseInt(server.players.split('/')[1])) * 100}%` 
                      }}
                    />
                  </div>

                  {/* IP and Connect Button */}
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
          ))}
        </div>
      </main>
    </div>
  );
} 