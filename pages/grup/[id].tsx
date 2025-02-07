import React from 'react';
import { useRouter } from 'next/router';
import { MainNav } from "@/components/ui/main-nav";
import Image from 'next/image';

interface Member {
  id: string;
  name: string;
  avatar: string;
  role: 'owner' | 'admin' | 'moderator' | 'member';
  joinDate: string;
}

interface GroupStats {
  memberCount: number;
  onlineCount: number;
  createdAt: string;
  level: number;
  xp: number;
  nextLevelXp: number;
}

interface Group {
  id: string;
  type: 'clan' | 'server' | 'community';
  name: string;
  tag: string;
  description: string;
  avatar: string;
  banner: string;
  stats: GroupStats;
  members: Member[];
  isPublic: boolean;
  discordUrl?: string;
  websiteUrl?: string;
}

export default function GroupProfile() {
  const router = useRouter();
  const { id } = router.query;

  // Örnek veri - Gerçek uygulamada API'den gelecek
  const group: Group = {
    id: '1',
    type: 'clan',
    name: 'Phantom Warriors',
    tag: 'PHW',
    description: 'Rekabetçi PvP odaklı klan. Haftalık turnuvalar ve etkinlikler düzenliyoruz. Yeni üyeler için eğitim programımız mevcuttur.',
    avatar: '/images/steve.png',
    banner: 'https://i.imgur.com/YQYQZq8.jpg',
    stats: {
      memberCount: 25,
      onlineCount: 12,
      createdAt: '01.01.2024',
      level: 15,
      xp: 2500,
      nextLevelXp: 3000
    },
    members: [
      {
        id: '1',
        name: 'PlayerOne',
        avatar: '/images/steve.png',
        role: 'owner',
        joinDate: '01.01.2024'
      },
      {
        id: '2',
        name: 'PlayerTwo',
        avatar: '/images/steve.png',
        role: 'admin',
        joinDate: '02.01.2024'
      }
    ],
    isPublic: true,
    discordUrl: 'https://discord.gg/example',
    websiteUrl: 'https://example.com'
  };

  const roleColors = {
    owner: 'text-yellow-500',
    admin: 'text-red-500',
    moderator: 'text-blue-500',
    member: 'text-gray-400'
  };

  const roleIcons = {
    owner: '👑',
    admin: '⚔️',
    moderator: '🛡️',
    member: '👤'
  };

  const typeLabels = {
    clan: 'Klan',
    server: 'Sunucu',
    community: 'Topluluk'
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <MainNav />

      <main className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Üst Kısım - Grup Kartı */}
          <div className="bg-[#151515] rounded-xl overflow-hidden border border-white/10 mb-8">
            <div className="relative h-48 md:h-64">
              <Image
                src={group.banner || "https://i.imgur.com/YQYQZq8.jpg"}
                alt="Banner"
                layout="fill"
                objectFit="cover"
                className="group-hover:brightness-110 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent" />
            </div>
            
            <div className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-primary/20">
                    <Image
                      src={group.avatar || "/images/default-avatar.png"}
                      alt={group.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary">
                      {group.name}
                    </h1>
                    <span className="text-lg font-semibold text-primary/80">{group.tag}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-primary/90 font-medium">{group.type === 'clan' ? 'Klan' : group.type === 'server' ? 'Sunucu' : 'Topluluk'}</span>
                    <span className="text-emerald-500">• Online</span>
                    <span className="text-gray-400">Kuruluş: {group.stats.createdAt}</span>
                  </div>
                </div>
                
                <button className="px-6 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 text-primary hover:text-white transition-all duration-300 text-sm font-medium">
                  Katıl
                </button>
              </div>
              
              <div className="mt-6">
                <p className="text-gray-300 leading-relaxed">{group.description}</p>
              </div>
            </div>
          </div>

          {/* Alt Kısım - İstatistikler ve Üyeler */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sol Kolon - İstatistikler */}
            <div className="space-y-6">
              <div className="bg-[#151515] rounded-xl p-6 border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white [text-shadow:_0_0_15px_rgb(var(--primary-rgb)_/_0.3)]">
                  İstatistikler
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Üyeler</span>
                    <span className="text-primary font-medium">{group.stats.memberCount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Çevrimiçi</span>
                    <span className="text-emerald-500 font-medium">{group.stats.onlineCount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Seviye</span>
                    <span className="text-yellow-500 font-medium">{group.stats.level}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Orta Kolon - Üyeler */}
            <div className="md:col-span-2">
              <div className="bg-[#151515] rounded-xl p-6 border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white [text-shadow:_0_0_15px_rgb(var(--primary-rgb)_/_0.3)]">
                  Üyeler
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {group.members.map((member: any) => (
                    <div key={member.id} className="flex items-center gap-3 p-3 rounded-lg bg-black/30 hover:bg-black/50 transition-colors">
                      <div className="w-10 h-10 rounded-lg overflow-hidden">
                        <Image
                          src={member.avatar || "/images/default-avatar.png"}
                          alt={member.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-primary/90">{member.name}</div>
                        <div className="text-sm text-gray-400">{member.role}</div>
                      </div>
                      {member.online && (
                        <div className="ml-auto">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 