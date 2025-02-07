import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Trophy, Calendar, Users } from 'lucide-react';

interface RecentEvent {
  id: string;
  title: string;
  date: string;
  type: string;
  participants: number;
  winner: {
    name: string;
    avatar: string;
    prize: string;
  };
  image: string;
}

const recentEvents: RecentEvent[] = [
  {
    id: '1',
    title: 'Büyük PvP Turnuvası',
    date: '2024-02-20',
    type: 'PvP',
    participants: 64,
    winner: {
      name: 'DragonSlayer',
      avatar: '/images/avatars/player1.png',
      prize: 'Elmas Set + 1000 MC'
    },
    image: '/images/events/pvp-tournament.jpg'
  },
  {
    id: '2',
    title: 'Build Battle Yarışması',
    date: '2024-02-18',
    type: 'Build',
    participants: 32,
    winner: {
      name: 'MasterBuilder',
      avatar: '/images/avatars/player2.png',
      prize: 'Özel Eşya + 500 MC'
    },
    image: '/images/events/build-battle.jpg'
  },
  {
    id: '3',
    title: 'Survival Games',
    date: '2024-02-15',
    type: 'Survival',
    participants: 48,
    winner: {
      name: 'SurvivalKing',
      avatar: '/images/avatars/player3.png',
      prize: 'VIP + 750 MC'
    },
    image: '/images/events/survival-games.jpg'
  }
];

export function RecentEventsSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black/50 via-black/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
            <span className="absolute -inset-2 blur-xl bg-primary/20 rounded-full"></span>
            <span className="relative">Son Etkinlikler</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Tamamlanan son etkinlikler ve kazananları
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 group hover:border-primary/50 transition-colors"
            >
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-white/70">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString('tr-TR')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{event.participants} Katılımcı</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  <div>
                    <div className="text-sm text-white/70">Kazanan</div>
                    <div className="font-medium text-white">{event.winner.name}</div>
                  </div>
                  <div className="ml-auto">
                    <div className="text-sm text-white/70">Ödül</div>
                    <div className="font-medium text-primary">{event.winner.prize}</div>
                  </div>
                </div>

                <Link
                  href={`/etkinlik/${event.id}`}
                  className="block w-full text-center py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors"
                >
                  Detayları Gör
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/etkinlikler"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors"
          >
            <span>Tüm Etkinlikleri Gör</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 