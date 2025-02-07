"use client";
import React, { useState } from 'react';
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { cn } from "@/utils/cn";
import { Event } from '@/types/event';
import Image from 'next/image';
import { motion } from 'framer-motion';

const weeklyEvents = [
  {
    title: "PvP Turnuvası",
    description: "Her Cumartesi 20:00'de düzenlenen PvP turnuvalarımıza katılın, ödülleri kazanın!",
    day: "Cumartesi",
    time: "20:00",
    prize: "50.000 Coin + Özel Kılıç",
    link: "#pvp"
  },
  {
    title: "Build Battle",
    description: "Yaratıcılığınızı gösterin! Her Pazar 15:00'te Build Battle etkinliğimiz var.",
    day: "Pazar",
    time: "15:00",
    prize: "30.000 Coin + Özel Bloklar",
    link: "#build"
  },
  {
    title: "Survival Games",
    description: "Hayatta kalma yeteneklerinizi test edin. Her Cuma 21:00'de başlıyor!",
    day: "Cuma",
    time: "21:00",
    prize: "40.000 Coin + VIP (1 Hafta)",
    link: "#survival"
  },
  {
    title: "Spleef Turnuvası",
    description: "Klasik Minecraft mini oyunu! Her Çarşamba 19:00'da buluşuyoruz.",
    day: "Çarşamba",
    time: "19:00",
    prize: "25.000 Coin + Özel Tag",
    link: "#spleef"
  }
];

const specialEvents = [
  {
    title: "Yılbaşı Etkinliği",
    description: "Özel haritada kar topu savaşı ve hediye avı!",
    date: "31 Aralık",
    type: "Sezonluk",
    link: "#new-year"
  },
  {
    title: "Cadılar Bayramı",
    description: "Korku temalı parkur ve boss savaşları",
    date: "31 Ekim",
    type: "Sezonluk",
    link: "#halloween"
  },
  {
    title: "Yaz Festivali",
    description: "Su savaşları ve plaj voleybolu turnuvası",
    date: "1-15 Temmuz",
    type: "Sezonluk",
    link: "#summer"
  },
  {
    title: "Sunucu Yıldönümü",
    description: "Büyük ödüllü yarışmalar ve sürpriz hediyeler",
    date: "15 Ağustos",
    type: "Özel",
    link: "#anniversary"
  }
];

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
  {
    id: '2',
    title: 'Build Battle',
    description: 'Yaratıcılığınızı konuşturun! En iyi yapıyı inşa eden büyük ödülün sahibi olacak.',
    image: '/images/events/build-battle.jpg',
    date: '2024-02-12',
    time: '18:00',
    totalParticipants: 28,
    maxParticipants: 32,
    type: 'build',
    rewards: [
      { title: 'VIP+ Üyelik', amount: '1 Ay' },
      { title: 'MC Coin', amount: '2000' }
    ],
    status: 'upcoming'
  },
  {
    id: '3',
    title: 'Survival Games',
    description: 'Hayatta kalan son kişi olmak için mücadele edin! Strateji ve PvP becerilerinizi gösterin.',
    image: '/images/events/survival-games.jpg',
    date: '2024-02-15',
    time: '21:00',
    totalParticipants: 92,
    maxParticipants: 100,
    type: 'survival',
    rewards: [
      { title: 'MVP Üyelik', amount: '2 Hafta' },
      { title: 'Özel Kıyafet Seti', amount: '1x' },
      { title: 'MC Coin', amount: '1500' }
    ],
    status: 'upcoming'
  }
];

const EventCard = ({ event }: { event: Event }) => {
  const [isParticipating, setIsParticipating] = useState(false);

  const handleParticipate = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsParticipating(!isParticipating);
  };

  const handleCardClick = () => {
    window.location.href = `/etkinlik/${event.id}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={handleCardClick}
      className="relative group bg-black/50 rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-colors cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
              {event.type.toUpperCase()}
            </span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
              {new Date(event.date).toLocaleDateString('tr-TR')} {event.time}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
        <p className="text-gray-400 mb-4">{event.description}</p>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Katılımcılar</span>
            <div className="flex items-center gap-2">
              <div className="h-2 w-32 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all"
                  style={{ width: `${(event.totalParticipants / event.maxParticipants) * 100}%` }}
                />
              </div>
              <span className="text-sm text-white">
                {event.totalParticipants}/{event.maxParticipants}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-sm text-gray-400">Ödüller</span>
            <div className="flex flex-wrap gap-2">
              {event.rewards.map((reward, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/90"
                >
                  {reward.amount} {reward.title}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-6">
          <button 
            onClick={handleCardClick}
            className="flex-1 px-4 py-2 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
          >
            Detaylar
          </button>
          <button 
            onClick={handleParticipate}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
              isParticipating
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            {isParticipating ? 'Vazgeç' : 'Katıl'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const EventsPage = () => {
  const [filter, setFilter] = useState<Event['type'] | 'all'>('all');

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.type === filter);

  return (
    <div className="min-h-screen w-full relative">
      <BackgroundBeams />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Etkinlikler
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sunucumuzda düzenlenen özel etkinliklere katılın, eğlenceli vakit geçirin ve ödüller kazanın!
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-12">
          {['all', 'pvp', 'build', 'survival', 'special'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type as Event['type'] | 'all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === type
                  ? 'bg-black border border-[#4ade80] text-[#4ade80] shadow-[0_0_10px_rgba(74,222,128,0.3)]'
                  : 'bg-[#0a0a0a] text-gray-400 hover:bg-[#151515]'
              }`}
            >
              {type === 'all' ? 'Tümü' : type.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage; 