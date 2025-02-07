import React from 'react';
import { MainNav } from "@/components/ui/main-nav";
import { useCredit } from '@/context/CreditContext';
import Image from 'next/image';

interface Statistics {
  kills: number;
  deaths: number;
  kdr: number;
  wins: number;
  played: number;
  winRate: number;
}

interface PurchaseHistory {
  id: string;
  itemName: string;
  price: number;
  date: string;
  image: string;
}

interface TierRanking {
  kit: string;
  rank: string;
  score: number;
  position: number;
}

export default function ProfilePage() {
  const { credit } = useCredit();

  // Örnek istatistikler
  const stats: Statistics = {
    kills: 1234,
    deaths: 567,
    kdr: 2.18,
    wins: 89,
    played: 150,
    winRate: 59.3
  };

  // Örnek satın alma geçmişi
  const purchaseHistory: PurchaseHistory[] = [
    {
      id: '1',
      itemName: 'Ejderha Kılıcı',
      price: 5000,
      date: '2024-02-15',
      image: '/images/store/dragon-sword.jpg'
    },
    {
      id: '2',
      itemName: 'Elmas Zırh Seti',
      price: 8000,
      date: '2024-02-14',
      image: '/images/store/diamond-armor.jpg'
    },
    {
      id: '3',
      itemName: 'Ninja Kostümü',
      price: 2500,
      date: '2024-02-13',
      image: '/images/store/ninja-costume.jpg'
    }
  ];

  // Örnek tier list sıralaması
  const tierRankings: TierRanking[] = [
    {
      kit: 'Savaşçı',
      rank: 'S',
      score: 2500,
      position: 1
    },
    {
      kit: 'Okçu',
      rank: 'A',
      score: 2200,
      position: 5
    },
    {
      kit: 'Büyücü',
      rank: 'B',
      score: 1800,
      position: 12
    }
  ];

  return (
    <div className="min-h-screen bg-black relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <MainNav />

      <main className="container mx-auto px-4 pt-24 md:pt-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Üst Kısım - Profil Özeti */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sol Kısım - Profil Kartı */}
            <div className="lg:col-span-1">
              <div className="bg-[#151515] rounded-xl p-6 border border-white/10">
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white mb-4">
                    <Image
                      src="/images/avatars/default.png"
                      alt="Profil"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h1 className="text-2xl font-bold text-white mb-2">PlayerName</h1>
                  <span className="text-white font-medium">VIP Üye</span>
                  <div className="mt-4 text-center">
                    <div className="text-2xl font-bold text-white">{credit} MC</div>
                    <div className="text-sm text-white/70">Kredi</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Kısım - İstatistikler */}
            <div className="lg:col-span-3">
              <div className="bg-[#151515] rounded-xl p-6 border border-white/10">
                <h2 className="text-xl font-bold text-white mb-4">İstatistikler</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-black/50 rounded-lg">
                    <div className="text-2xl font-bold text-white">{stats.kills}</div>
                    <div className="text-sm text-white/70">Öldürme</div>
                  </div>
                  <div className="p-4 bg-black/50 rounded-lg">
                    <div className="text-2xl font-bold text-white">{stats.deaths}</div>
                    <div className="text-sm text-white/70">Ölüm</div>
                  </div>
                  <div className="p-4 bg-black/50 rounded-lg">
                    <div className="text-2xl font-bold text-white">{stats.kdr}</div>
                    <div className="text-sm text-white/70">K/D Oranı</div>
                  </div>
                  <div className="p-4 bg-black/50 rounded-lg">
                    <div className="text-2xl font-bold text-white">{stats.wins}</div>
                    <div className="text-sm text-white/70">Galibiyet</div>
                  </div>
                  <div className="p-4 bg-black/50 rounded-lg">
                    <div className="text-2xl font-bold text-white">{stats.played}</div>
                    <div className="text-sm text-white/70">Oynanılan</div>
                  </div>
                  <div className="p-4 bg-black/50 rounded-lg">
                    <div className="text-2xl font-bold text-white">%{stats.winRate}</div>
                    <div className="text-sm text-white/70">Kazanma Oranı</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alt Kısım - Satın Alma Geçmişi ve Tier List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Satın Alma Geçmişi */}
            <div className="bg-[#151515] rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">Satın Alma Geçmişi</h2>
              <div className="space-y-4">
                {purchaseHistory.map((purchase) => (
                  <div key={purchase.id} className="flex items-center gap-4 p-4 bg-black/50 rounded-lg">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                      <Image
                        src={purchase.image}
                        alt={purchase.itemName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{purchase.itemName}</h3>
                      <div className="text-white">{purchase.price} MC</div>
                      <div className="text-sm text-white/70">
                        {new Date(purchase.date).toLocaleDateString('tr-TR')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tier List Sıralaması */}
            <div className="bg-[#151515] rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">Tier List Sıralaması</h2>
              <div className="space-y-4">
                {tierRankings.map((tier) => (
                  <div key={tier.kit} className="flex items-center justify-between p-4 bg-black/50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl font-bold ${
                        tier.rank === 'S' ? 'bg-yellow-500' :
                        tier.rank === 'A' ? 'bg-red-500' :
                        tier.rank === 'B' ? 'bg-blue-500' :
                        tier.rank === 'C' ? 'bg-green-500' : 'bg-gray-500'
                      }`}>
                        {tier.rank}
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{tier.kit}</h3>
                        <div className="text-sm text-white/70">Skor: {tier.score}</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white">#{tier.position}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 