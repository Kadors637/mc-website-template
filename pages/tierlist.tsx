import React, { useState } from 'react';
import { MainNav } from "@/components/ui/main-nav";
import Image from 'next/image';

interface Player {
  id: string;
  username: string;
  discordId: string;
  type: 'nethpot' | 'diapot' | 'crystal' | 'beast' | 'gapple' | 'shield';
  tier: 'S' | 'A' | 'B' | 'C' | 'D';
  avatar: string;
  kills?: number;
  deaths?: number;
  winRate?: number;
  joinDate?: string;
}

export default function TierList() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const playersPerPage = 10;

  const players: Player[] = [
    {
      id: '1',
      username: 'DragonSlayer',
      discordId: 'dragon#1234',
      type: 'nethpot',
      tier: 'S',
      avatar: '/logos/avatar.png',
      kills: 150,
      deaths: 45,
      winRate: 76.5,
      joinDate: '2024-01-15'
    },
    {
      id: '2',
      username: 'PvPMaster',
      discordId: 'pvp#5678',
      type: 'diapot',
      tier: 'A',
      avatar: '/logos/avatar.png',
    },
    {
      id: '3',
      username: 'CrystalKing',
      discordId: 'crystal#9012',
      type: 'crystal',
      tier: 'S',
      avatar: '/logos/avatar.png',
    },
    {
      id: '4',
      username: 'BeastHunter',
      discordId: 'beast#3456',
      type: 'beast',
      tier: 'B',
      avatar: '/logos/avatar.png',
    },
    {
      id: '5',
      username: 'GappleWarrior',
      discordId: 'gapple#7890',
      type: 'gapple',
      tier: 'A',
      avatar: '/logos/avatar.png',
    },
    {
      id: '6',
      username: 'ShieldMaster',
      discordId: 'shield#1234',
      type: 'shield',
      tier: 'C',
      avatar: '/logos/avatar.png',
    },
    {
      id: '7',
      username: 'NetherpotPro',
      discordId: 'nether#5555',
      type: 'nethpot',
      tier: 'S',
      avatar: '/logos/avatar.png',
    },
    {
      id: '8',
      username: 'DiamondKnight',
      discordId: 'diamond#6666',
      type: 'diapot',
      tier: 'B',
      avatar: '/logos/avatar.png',
    },
    {
      id: '9',
      username: 'CrystalMage',
      discordId: 'mage#7777',
      type: 'crystal',
      tier: 'A',
      avatar: '/logos/avatar.png',
    },
    {
      id: '10',
      username: 'BeastTamer',
      discordId: 'tamer#8888',
      type: 'beast',
      tier: 'C',
      avatar: '/logos/avatar.png',
    },
    {
      id: '11',
      username: 'GappleKing',
      discordId: 'king#9999',
      type: 'gapple',
      tier: 'S',
      avatar: '/logos/avatar.png',
    },
    {
      id: '12',
      username: 'ShieldBearer',
      discordId: 'bearer#0000',
      type: 'shield',
      tier: 'A',
      avatar: '/logos/avatar.png',
    },
    {
      id: '13',
      username: 'NetherLord',
      discordId: 'lord#1111',
      type: 'nethpot',
      tier: 'A',
      avatar: '/logos/avatar.png',
    },
    {
      id: '14',
      username: 'PotionMaster',
      discordId: 'potion#2222',
      type: 'diapot',
      tier: 'S',
      avatar: '/logos/avatar.png',
    },
    {
      id: '15',
      username: 'CrystalQueen',
      discordId: 'queen#3333',
      type: 'crystal',
      tier: 'B',
      avatar: '/logos/avatar.png',
    },
    {
      id: '16',
      username: 'BeastLord',
      discordId: 'beast#4444',
      type: 'beast',
      tier: 'A',
      avatar: '/logos/avatar.png',
    },
    {
      id: '17',
      username: 'GappleGuardian',
      discordId: 'guardian#5555',
      type: 'gapple',
      tier: 'C',
      avatar: '/logos/avatar.png',
    },
    {
      id: '18',
      username: 'ShieldKnight',
      discordId: 'knight#6666',
      type: 'shield',
      tier: 'B',
      avatar: '/logos/avatar.png',
    },
    {
      id: '19',
      username: 'NetherQueen',
      discordId: 'queen#7777',
      type: 'nethpot',
      tier: 'D',
      avatar: '/logos/avatar.png',
    },
    {
      id: '20',
      username: 'PotionLord',
      discordId: 'lord#8888',
      type: 'diapot',
      tier: 'C',
      avatar: '/logos/avatar.png',
    }
  ];

  const filterTypes = [
    {
      id: 'nethpot',
      name: 'Nethpot',
      icon: '/images/kits/nethpot.svg'
    },
    {
      id: 'diapot',
      name: 'Diapot',
      icon: '/images/kits/pot.svg'
    },
    {
      id: 'crystal',
      name: 'Crystal',
      icon: '/images/kits/uhc.svg'
    },
    {
      id: 'beast',
      name: 'Beast',
      icon: '/images/kits/vanilla.svg'
    },
    {
      id: 'gapple',
      name: 'Gapple',
      icon: '/images/kits/sword.svg'
    },
    {
      id: 'shield',
      name: 'Shield',
      icon: '/images/kits/axe.svg'
    }
  ];

  const filteredPlayers = selectedType ? players.filter(player => player.type === selectedType) : players;
  
  // Pagination Logic
  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentPlayers = filteredPlayers.slice(indexOfFirstPlayer, indexOfLastPlayer);
  const totalPages = Math.ceil(filteredPlayers.length / playersPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen relative">
      <main className="container mx-auto px-4 pt-24 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center relative">
              <span className="absolute -inset-2 blur-xl bg-primary/20 rounded-full"></span>
              <span className="relative inline-block text-white
                           before:absolute before:inset-0
                           before:text-primary before:content-['Oyuncu_Listesi']
                           before:blur-[2px] before:animate-pulse
                           after:absolute after:inset-0
                           after:text-primary/50 after:content-['Oyuncu_Listesi']
                           after:blur-[4px]
                           [text-shadow:0_0_10px_rgba(var(--primary-rgb),0.5),0_0_20px_rgba(var(--primary-rgb),0.3),0_0_30px_rgba(var(--primary-rgb),0.2)]">
                Oyuncu Listesi
              </span>
            </h1>
            
            {/* Filtreleme İkonları */}
            <div className="flex gap-4 bg-[#0a0a0a] p-4 rounded-xl border-2 border-[#4ade80] relative">
              <div className="relative flex gap-4">
                {filterTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      setSelectedType(selectedType === type.id ? null : type.id);
                      setCurrentPage(1);
                    }}
                    className={`relative p-3 rounded-lg transition-all duration-300 ${
                      selectedType === type.id 
                        ? 'bg-[#4ade80]/40 ring-2 ring-[#4ade80] shadow-[0_0_30px_rgba(74,222,128,0.8)] scale-110'
                        : 'bg-[#151515] hover:bg-[#202020] hover:shadow-[0_0_25px_rgba(74,222,128,0.6)] hover:scale-105'
                    }`}
                  >
                    <Image
                      src={type.icon}
                      alt={type.name}
                      width={32}
                      height={32}
                      className="transition-all duration-300 hover:brightness-200"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Oyuncu Listesi */}
          <div className="bg-[#0a0a0a] rounded-xl">
            <div className="grid grid-cols-1 gap-4 p-6">
              {currentPlayers.map((player) => (
                <div
                  key={player.id}
                  onClick={() => setSelectedPlayer(player)}
                  className="bg-[#151515] rounded-lg p-4 flex items-center justify-between cursor-pointer
                           transform transition-all duration-500 ease-out group
                           hover:scale-[1.02] hover:z-10
                           hover:shadow-[0_0_50px_rgba(74,222,128,0.3)]
                           hover:border-2 hover:border-[#4ade80]
                           relative isolate"
                >
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-[#4ade8040] to-[#4ade8040] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm" />
                  <div className="flex items-center gap-4 relative">
                    <div className="w-12 h-12 relative rounded-full overflow-hidden ring-2 ring-[#4ade80]/60 shadow-[0_0_20px_rgba(74,222,128,0.4)]">
                      <Image
                        src={player.avatar}
                        alt={player.username}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-medium group-hover:text-[#4ade80] transition-colors">{player.username}</h3>
                      <p className="text-sm text-gray-300">{player.discordId}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-lg text-sm font-medium ${
                    player.tier === 'S' ? 'bg-[#FFD700]/40 text-[#FFE55C] ring-2 ring-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.5)] border border-[#FFD700]/80' :
                    player.tier === 'A' ? 'bg-[#00BFFF]/40 text-[#66D9FF] ring-2 ring-[#00BFFF] shadow-[0_0_20px_rgba(0,191,255,0.5)] border border-[#00BFFF]/80' :
                    player.tier === 'B' ? 'bg-[#00FF00]/40 text-[#80FF80] ring-2 ring-[#00FF00] shadow-[0_0_20px_rgba(0,255,0,0.5)] border border-[#00FF00]/80' :
                    player.tier === 'C' ? 'bg-[#FFA500]/40 text-[#FFD280] ring-2 ring-[#FFA500] shadow-[0_0_20px_rgba(255,165,0,0.5)] border border-[#FFA500]/80' :
                    'bg-[#FF0000]/40 text-[#FF8080] ring-2 ring-[#FF0000] shadow-[0_0_20px_rgba(255,0,0,0.5)] border border-[#FF0000]/80'
                  }`}>
                    {player.tier}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 p-4 border-t border-white/10">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-lg text-sm ${
                  currentPage === 1
                    ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                    : 'bg-white/10 text-white hover:bg-[#4ade80]/20 hover:text-[#4ade80] transition-colors'
                }`}
              >
                Önceki
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`w-8 h-8 rounded-lg text-sm transition-all duration-300 ${
                    currentPage === number
                      ? 'bg-[#4ade80] text-black shadow-[0_0_15px_#4ade80]'
                      : 'bg-white/10 text-white hover:bg-[#4ade80]/20 hover:text-[#4ade80]'
                  }`}
                >
                  {number}
                </button>
              ))}

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-lg text-sm ${
                  currentPage === totalPages
                    ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                    : 'bg-white/10 text-white hover:bg-[#4ade80]/20 hover:text-[#4ade80] transition-colors'
                }`}
              >
                Sonraki
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Profil Popup */}
      {selectedPlayer && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
             onClick={() => setSelectedPlayer(null)}>
          <div className="bg-[#0a0a0a] rounded-xl p-8 max-w-2xl w-full transform transition-all 
                         shadow-[0_0_30px_rgba(74,222,128,0.15)]
                         border border-[#4ade80]/30
                         relative"
               onClick={e => e.stopPropagation()}>
            {/* Kapatma Butonu */}
            <button
              onClick={() => setSelectedPlayer(null)}
              className="absolute -top-3 -right-3 w-8 h-8 bg-[#151515] rounded-full
                         flex items-center justify-center
                         border border-[#4ade80]/30
                         hover:bg-[#4ade80]/20 hover:border-[#4ade80]/50
                         transition-all duration-300
                         group"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 text-gray-400 group-hover:text-[#4ade80] transition-colors" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-start gap-6 mb-8">
              <div className="w-32 h-32 relative rounded-2xl overflow-hidden 
                            ring-1 ring-primary/20 shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]">
                <Image
                  src={selectedPlayer.avatar}
                  alt={selectedPlayer.username}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedPlayer.username}
                </h2>
                <p className="text-lg text-gray-300 mb-3">{selectedPlayer.discordId}</p>
                <div className={`inline-block px-4 py-2 rounded-lg text-base font-medium ${
                  selectedPlayer.tier === 'S' ? 'bg-[#FFD700]/20 text-[#FFE55C] ring-1 ring-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.3)] border border-[#FFD700]/50' :
                  selectedPlayer.tier === 'A' ? 'bg-[#00BFFF]/20 text-[#66D9FF] ring-1 ring-[#00BFFF] shadow-[0_0_15px_rgba(0,191,255,0.3)] border border-[#00BFFF]/50' :
                  selectedPlayer.tier === 'B' ? 'bg-[#00FF00]/20 text-[#80FF80] ring-1 ring-[#00FF00] shadow-[0_0_15px_rgba(0,255,0,0.3)] border border-[#00FF00]/50' :
                  selectedPlayer.tier === 'C' ? 'bg-[#FFA500]/20 text-[#FFD280] ring-1 ring-[#FFA500] shadow-[0_0_15px_rgba(255,165,0,0.3)] border border-[#FFA500]/50' :
                  'bg-[#FF0000]/20 text-[#FF8080] ring-1 ring-[#FF0000] shadow-[0_0_15px_rgba(255,0,0,0.3)] border border-[#FF0000]/50'
                }`}>
                  {selectedPlayer.tier} Tier
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-[#151515] p-6 rounded-xl hover:bg-[#202020] transition-colors
                            border border-primary/10 hover:border-primary/20 group">
                <p className="text-base text-gray-400 mb-1 group-hover:text-gray-300 transition-colors">Öldürme</p>
                <p className="text-3xl font-bold text-white">
                  {selectedPlayer.kills || 0}
                </p>
              </div>
              <div className="bg-[#151515] p-6 rounded-xl hover:bg-[#202020] transition-colors
                            border border-primary/10 hover:border-primary/20 group">
                <p className="text-base text-gray-400 mb-1 group-hover:text-gray-300 transition-colors">Ölüm</p>
                <p className="text-3xl font-bold text-white">
                  {selectedPlayer.deaths || 0}
                </p>
              </div>
              <div className="bg-[#151515] p-6 rounded-xl hover:bg-[#202020] transition-colors
                            border border-primary/10 hover:border-primary/20 group">
                <p className="text-base text-gray-400 mb-1 group-hover:text-gray-300 transition-colors">Kazanma Oranı</p>
                <p className="text-3xl font-bold text-white">
                  %{selectedPlayer.winRate || 0}
                </p>
              </div>
              <div className="bg-[#151515] p-6 rounded-xl hover:bg-[#202020] transition-colors
                            border border-primary/10 hover:border-primary/20 group">
                <p className="text-base text-gray-400 mb-1 group-hover:text-gray-300 transition-colors">Katılma Tarihi</p>
                <p className="text-3xl font-bold text-white">
                  {new Date(selectedPlayer.joinDate || '').toLocaleDateString('tr-TR')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Add these styles to your global CSS or at the top of the file
const styles = `
  @keyframes shine {
    from { background-position: 200% 0; }
    to { background-position: -200% 0; }
  }

  @keyframes gradient-x {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .animate-shine {
    animation: shine 3s linear infinite;
  }

  .animate-shine-slow {
    animation: shine 6s linear infinite;
  }

  .animate-gradient-x {
    animation: gradient-x 15s ease infinite;
    background-size: 200% 200%;
  }
`; 