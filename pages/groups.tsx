import { MainNav } from "@/components/ui/main-nav";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from 'next/image';
import { useRouter } from 'next/router';

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
      type: "server",
      boost: 5,
      isSuper: true,
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
      type: "server",
      boost: 0,
    },
    {
      name: "Factions",
      version: "1.20.1",
      players: "150/200",
      description: "PvP ve klan savaşları",
      status: "online",
      features: ["PvP", "Raiding", "Custom Items", "Weekly Events"],
      ip: "factions.mcserver.com",
      color: "from-red-500 to-rose-700",
      icon: "⚔️",
      type: "server",
      boost: 0,
    },
  ],
  clans: [
    {
      name: "Dragons",
      members: 25,
      leader: "DragonMaster",
      description: "En eski ve güçlü klanlardan biri",
      color: "from-red-500 to-rose-700",
      type: "clan",
      logo: "🐉",
      tag: "[DRG]",
      boost: 5,
      isBoostTagVisible: true,
      onlineTag: true,
    },
    {
      name: "Phoenix",
      members: 20,
      leader: "PhoenixKing",
      description: "PvP odaklı rekabetçi klan",
      color: "from-orange-500 to-amber-700",
      type: "clan",
      logo: "🦅",
      tag: "[PHX]",
      boost: 0,
      isBoostTagVisible: true,
      onlineTag: true,
    },
    {
      name: "Warriors",
      members: 30,
      leader: "WarMaster",
      description: "Savaş ve strateji odaklı klan",
      color: "from-purple-500 to-indigo-700",
      type: "clan",
      logo: "⚔️",
      tag: "[WAR]",
      boost: 0,
      isBoostTagVisible: true,
      onlineTag: false,
    },
    {
      name: "Builders",
      members: 15,
      leader: "BuildMaster",
      description: "Yaratıcı yapı ustaları",
      color: "from-yellow-500 to-amber-700",
      type: "clan",
      logo: "🏗️",
      tag: "[BLD]",
      boost: 0,
      profilePicture: "/clan-logos/builders.png",
      onlineTag: true,
    },
  ],
  communities: [
    {
      name: "Builders United",
      members: 150,
      type: "community",
      category: "Build",
      leader: "MasterBuilder",
      description: "Minecraft yapı ve tasarım topluluğu",
      color: "from-yellow-500 to-amber-700",
      boost: 5,
    },
    {
      name: "PvP Masters",
      members: 200,
      type: "community",
      category: "Combat",
      leader: "BattleMaster",
      description: "PvP odaklı oyuncu topluluğu",
      color: "from-purple-500 to-indigo-700",
      boost: 0,
    },
  ],
};

export default function GroupsPage() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filters = [
    { id: "all", name: "Tümü" },
    { id: "server", name: `Sunucular (${groupsData.servers.length})` },
    { id: "clan", name: `Klanlar (${groupsData.clans.length})` },
    { id: "community", name: `Topluluklar (${groupsData.communities.length})` },
  ];

  const allGroups = [
    ...groupsData.servers,
    ...groupsData.clans,
    ...groupsData.communities,
  ];

  const filteredGroups = allGroups.filter((group) => {
    const matchesFilter = activeFilter === "all" || group.type === activeFilter;
    const matchesSearch = group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         group.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  }).sort((a, b) => {
    if (a.boost !== b.boost) {
      return (b.boost || 0) - (a.boost || 0);
    }
    return a.name.localeCompare(b.name);
  });

  const totalPages = Math.ceil(filteredGroups.length / itemsPerPage);
  const currentGroups = filteredGroups.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getButtonColor = (color: string) => {
    if (color.includes("green")) {
      return "bg-[#2ecc71] hover:bg-[#27ae60]";
    }
    if (color.includes("blue")) {
      return "bg-[#3498db] hover:bg-[#2980b9]";
    }
    if (color.includes("red")) {
      return "bg-[#e74c3c] hover:bg-[#c0392b]";
    }
    if (color.includes("orange")) {
      return "bg-[#e67e22] hover:bg-[#d35400]";
    }
    return "bg-[#2ecc71] hover:bg-[#27ae60]";
  };

  const getBoostEffectClasses = (boost: number, color: string) => {
    if (color.includes("green")) {
      return `
        bg-gradient-to-br from-[#0a321c] to-[#051912]
        hover:from-[#0c3920] hover:to-[#072015]
        transition-all duration-300
      `;
    }
    if (color.includes("blue")) {
      return `
        bg-gradient-to-br from-[#0a2837] to-[#051820]
        hover:from-[#0c2f40] hover:to-[#071b24]
        transition-all duration-300
      `;
    }
    if (color.includes("red")) {
      return `
        bg-gradient-to-br from-[#370a0a] to-[#200505]
        hover:from-[#400c0c] hover:to-[#240707]
        transition-all duration-300
      `;
    }
    if (color.includes("orange")) {
      return `
        bg-gradient-to-br from-[#372813] to-[#20160b]
        hover:from-[#402d16] hover:to-[#24190d]
        transition-all duration-300
      `;
    }
    return `
      bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f]
      hover:from-[#202020] hover:to-[#151515]
      transition-all duration-300
    `;
  };

  const handleGroupClick = (group: any) => {
    let groupId;
    switch (group.type) {
      case 'server':
        groupId = group.name.toLowerCase().replace(/\s+/g, '-');
        break;
      case 'clan':
        groupId = group.tag.toLowerCase().replace(/[\[\]]/g, '');
        break;
      case 'community':
        groupId = group.name.toLowerCase().replace(/\s+/g, '-');
        break;
      default:
        groupId = 'unknown';
    }
    router.push(`/grup/${groupId}`);
  };

  const renderCardHeader = (group: any) => (
    <div className="flex items-center p-4 gap-3">
      <div className="relative">
        <div className="w-12 h-12 rounded-lg bg-[#1a2633] flex items-center justify-center text-2xl overflow-hidden">
          {group.profilePicture ? (
            <Image
              src={group.profilePicture}
              alt={group.name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          ) : (
            <span>{group.icon || group.logo}</span>
          )}
        </div>
        {group.onlineTag && (
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0f1923]" />
        )}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <h2 className="text-lg font-semibold text-white">{group.name}</h2>
          {group.version && (
            <span className="text-sm text-gray-400">Version {group.version}</span>
          )}
          {group.tag && (
            <span className="px-2 py-0.5 text-xs font-medium bg-[#1a2633] text-gray-300 rounded">
              {group.tag}
            </span>
          )}
          {group.isSuper && (
            <span className="px-2 py-0.5 text-xs font-medium bg-yellow-500/20 text-yellow-500 rounded">
              SUPER
            </span>
          )}
          {group.boost >= 3 && (
            <span className={`px-2 py-0.5 text-xs font-medium rounded flex items-center gap-1 ${
              group.boost >= 5 
                ? 'bg-purple-500/20 text-purple-400'
                : 'bg-blue-500/20 text-blue-400'
            }`}>
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
              Boost {group.boost}
            </span>
          )}
          {group.status && (
            <span className={`ml-auto inline-flex items-center px-2 py-0.5 text-xs font-medium rounded ${
              group.status === 'online'
                ? 'bg-green-500/20 text-green-400'
                : 'bg-red-500/20 text-red-400'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full mr-1 ${
                group.status === 'online' ? 'bg-green-400' : 'bg-red-400'
              }`} />
              ONLINE
            </span>
          )}
        </div>
        <p className="text-sm text-gray-400">
          {group.leader ? `Lider: ${group.leader}` : group.category}
        </p>
      </div>
    </div>
  );

  const renderGroupCard = (group: any) => {
    const boostClasses = getBoostEffectClasses(group.boost || 0, group.color);
    
    return (
      <motion.div
        key={group.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => handleGroupClick(group)}
        className={`group relative overflow-hidden transition-all duration-300 cursor-pointer ${
          group.boost >= 3 ? 'hover:-translate-y-2 hover:scale-[1.02]' : 'hover:-translate-y-0.5'
        }`}
      >
        <div className={`
          relative rounded-lg overflow-hidden backdrop-blur-sm
          ${boostClasses}
          ${group.boost >= 5 ? 'border-2 border-purple-500/50 hover:border-purple-400/70' : 
            group.boost >= 3 ? 'border-2 border-blue-500/50 hover:border-blue-400/70' : ''}
        `}>
          {group.boost >= 5 && (
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-purple-500/20 to-transparent"></div>
            </div>
          )}

          {group.boost >= 3 && group.boost < 5 && (
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-blue-500/20 to-transparent"></div>
            </div>
          )}

          {group.boost >= 3 && (
            <div className="absolute -top-4 -right-4 z-20 transform translate-x-1/4 -translate-y-1/4">
              <div className={`
                relative px-4 py-1.5
                ${group.boost >= 5 
                  ? 'bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 shadow-lg shadow-purple-500/50' 
                  : 'bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 shadow-lg shadow-blue-500/50'
                }
                text-white text-sm font-bold rounded-full
                flex items-center gap-2
                whitespace-nowrap
                border border-white/20
                animate-pulse-slow
              `}>
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
                <span>Boost {group.boost}</span>
              </div>
            </div>
          )}

          <div className="relative z-10">
            {renderCardHeader(group)}

            <div className="px-4 pb-2">
              <p className="text-sm text-gray-300">{group.description}</p>
            </div>

            {group.features && (
              <div className="px-4 pb-3 flex flex-wrap gap-1">
                {group.features.map((feature: string) => {
                  const [fromColor] = group.color.split(" ");
                  return (
                    <span
                      key={feature}
                      className={`
                        px-2 py-0.5 text-xs rounded-md
                        ${group.boost >= 5 
                          ? 'bg-purple-500/10 text-white hover:bg-purple-500/20' 
                          : group.boost >= 3 
                            ? 'bg-blue-500/10 text-white hover:bg-blue-500/20'
                            : `${fromColor}/10 text-gray-200 hover:${fromColor}/20`
                        }
                        transition-colors duration-300
                      `}
                    >
                      {feature}
                    </span>
                  );
                })}
              </div>
            )}

            {group.players && (
              <div className="px-4 pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" 
                      />
                    </svg>
                    <span className="text-sm text-gray-400">Online Oyuncular</span>
                  </div>
                  <span className="text-sm font-medium text-white">{group.players}</span>
                </div>
              </div>
            )}

            <div className={`p-4 border-t transition-colors ${
              group.boost >= 5 
                ? 'border-purple-500/20' 
                : group.boost >= 3 
                  ? 'border-blue-500/20'
                  : `border-${group.color.split(" ")[1].replace("to-", "")}/20`
            } flex items-center justify-between`}>
              {group.ip ? (
                <>
                  <code className="text-sm text-gray-300 font-mono select-all">
                    {group.ip}
                  </code>
                  <button className={`px-4 py-1.5 text-sm font-medium rounded ${getButtonColor(group.color)} text-white transition-colors duration-300`}>
                    Bağlan
                  </button>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 text-gray-300">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm">{group.members} Üye</span>
                  </div>
                  <button className={`px-4 py-1.5 text-sm font-medium rounded ${getButtonColor(group.color)} text-white transition-colors duration-300`}>
                    Katıl
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen relative">
      <main className="container mx-auto px-4 pt-24 relative">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold relative mb-4 text-white">
            <span className="absolute blur-sm inset-0 text-primary">Gruplar</span>
            <span className="relative">Gruplar</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4 text-lg">
            Sunucular, klanlar ve topluluklar arasında gezinin.
          </p>
          <div className="text-sm text-gray-500">
            Toplam: {allGroups.length} grup ({groupsData.servers.length} sunucu, {groupsData.clans.length} klan, {groupsData.communities.length} topluluk)
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 relative z-10">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Grup ara..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-2 bg-[#0a0a0a] border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => {
                    setActiveFilter(filter.id);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeFilter === filter.id
                      ? 'bg-black border border-[#4ade80] text-[#4ade80] shadow-[0_0_10px_rgba(74,222,128,0.3)]'
                      : 'bg-[#0a0a0a] text-gray-400 hover:bg-[#151515]'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {currentGroups.map((group) => renderGroupCard(group))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-[#0a0a0a] text-gray-400 hover:bg-[#151515] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Önceki
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === page
                    ? 'bg-primary text-white'
                    : 'bg-[#0a0a0a] text-gray-400 hover:bg-[#151515]'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-[#0a0a0a] text-gray-400 hover:bg-[#151515] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Sonraki
            </button>
          </div>
        )}
      </main>
    </div>
  );
} 