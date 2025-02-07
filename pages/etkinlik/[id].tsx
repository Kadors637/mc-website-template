import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { MainNav } from "@/components/ui/main-nav";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from 'next/image';
import Link from 'next/link';
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Event } from '@/types/event';

interface Participant {
  id: string;
  username: string;
  avatar: string;
  rank?: string;
  joinDate: string;
  isOnline?: boolean;
}

const statusColors = {
  active: 'bg-green-500',
  upcoming: 'bg-blue-500',
  completed: 'bg-gray-500'
};

const statusText = {
  active: 'Aktif',
  upcoming: 'Yakında',
  completed: 'Tamamlandı'
};

// Örnek katılımcılar
const testimonials = [
  {
    quote: "Bu etkinlik gerçekten muhteşemdi! Bir sonrakini sabırsızlıkla bekliyorum.",
    name: "DragonSlayer",
    title: "VIP Oyuncu",
    avatar: "/images/avatars/player1.png"
  },
  {
    quote: "Organizasyon mükemmeldi, çok eğlendik!",
    name: "CrystalKing",
    title: "MVP Oyuncu",
    avatar: "/images/avatars/player2.png"
  },
  {
    quote: "Ödüller harikaydı, kesinlikle tekrar katılacağım.",
    name: "PvPMaster",
    title: "Elite Oyuncu",
    avatar: "/images/avatars/player3.png"
  },
  {
    quote: "Sunucu ekibi çok yardımcıydı, her şey kusursuzdu.",
    name: "BuildMaster",
    title: "Premium Oyuncu",
    avatar: "/images/avatars/player4.png"
  }
];

// Geçici olarak events verisini burada tutuyoruz
// Gerçek uygulamada bu veri API'den gelecektir
const events: Event[] = [
  {
    id: '1',
    title: 'PvP Turnuvası',
    description: 'Haftalık düzenlenen PvP turnuvasında yeteneklerinizi gösterin ve ödüller kazanın!',
    image: '/images/events/pvp-tournament.jpg',
    date: '2024-02-10',
    time: '20:00',
    totalParticipants: 45,
    maxParticipants: 64,
    type: 'pvp',
    rewards: [
      { title: 'Elmas Set', amount: '1x' },
      { title: 'Özel Kılıç', amount: '1x' },
      { title: 'MC Coin', amount: '1000' }
    ],
    status: 'upcoming'
  },
  // ... Diğer etkinlikler buraya eklenebilir
];

const EventDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isParticipating, setIsParticipating] = useState(false);

  const event = events.find(e => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <h1 className="text-2xl text-white">Etkinlik bulunamadı</h1>
      </div>
    );
  }

  const handleParticipate = () => {
    // Burada katılım işlemleri yapılacak
    setIsParticipating(!isParticipating);
  };

  return (
    <div className="min-h-screen w-full relative">
      <BackgroundBeams />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 relative z-10">
        <div className="mb-8">
          <button
            onClick={() => router.push('/etkinlikler')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <svg 
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Etkinliklere Dön</span>
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/50 rounded-xl overflow-hidden border border-white/10"
        >
          <div className="relative h-96">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>

          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-4xl font-bold text-white">{event.title}</h1>
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full">
                {event.type.toUpperCase()}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-2">Etkinlik Detayları</h2>
                  <p className="text-gray-400">{event.description}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-white mb-2">Tarih ve Saat</h2>
                  <p className="text-gray-400">
                    {new Date(event.date).toLocaleDateString('tr-TR')} - {event.time}
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-white mb-2">Katılımcılar</h2>
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all"
                        style={{ width: `${(event.totalParticipants / event.maxParticipants) * 100}%` }}
                      />
                    </div>
                    <span className="text-white whitespace-nowrap">
                      {event.totalParticipants}/{event.maxParticipants}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Ödüller</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {event.rewards.map((reward, index) => (
                      <div
                        key={index}
                        className="p-4 bg-white/5 rounded-lg border border-white/10"
                      >
                        <div className="text-lg font-medium text-white">{reward.title}</div>
                        <div className="text-primary">{reward.amount}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Kurallar</h2>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Etkinlik başlamadan 5 dakika önce hazır olunmalıdır</li>
                    <li>Fair play kurallarına uyulmalıdır</li>
                    <li>Hile kullanımı yasaktır</li>
                    <li>Uygunsuz davranışlar diskalifiye sebebidir</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={handleParticipate}
                className={`px-8 py-3 rounded-lg font-medium text-lg transition-colors ${
                  isParticipating
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                {isParticipating ? 'Katılımı İptal Et' : 'Etkinliğe Katıl'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventDetailPage; 