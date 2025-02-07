import React from 'react';

const features = [
  {
    title: "PvP Turnuvaları",
    description: "Haftalık düzenlenen PvP turnuvalarıyla yeteneklerinizi gösterin ve ödüller kazanın.",
    link: "/etkinlikler",
    icon: "⚔️",
    color: "from-red-500 to-orange-500"
  },
  {
    title: "Ekonomi Sistemi",
    description: "Gelişmiş ekonomi sistemi ile ticaret yapın, eşya alıp satın ve zengin olun.",
    link: "/market",
    icon: "💰",
    color: "from-yellow-500 to-amber-500"
  },
  {
    title: "Özel Etkinlikler",
    description: "Build Battle, Survival Games ve daha fazlası! Her gün farklı bir etkinlikle eğlence dorukta.",
    link: "/etkinlikler",
    icon: "🎮",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "VIP Ayrıcalıkları",
    description: "VIP üyelere özel komutlar, eşyalar ve çok daha fazla ayrıcalık!",
    link: "/magaza",
    icon: "👑",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Aktif Topluluk",
    description: "Yardımsever ve eğlenceli topluluk ile tanışın, yeni arkadaşlar edinin.",
    link: "/gruplar",
    icon: "🤝",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "7/24 Destek",
    description: "Aklınıza takılan her konuda size yardımcı olmak için buradayız.",
    link: "/contact",
    icon: "🛟",
    color: "from-indigo-500 to-violet-500"
  },
];

export const FeaturesSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-transparent via-black/50 to-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
            <span className="absolute -inset-2 blur-xl bg-primary/20 rounded-full"></span>
            <span className="relative">Sunucumuzun Özellikleri</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Size en iyi Minecraft deneyimini sunmak için özenle tasarlandı
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <a
              href={feature.link}
              key={i}
              className="group relative overflow-hidden rounded-xl p-6 bg-black/50 border border-white/10 hover:border-primary/50 transition-colors"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{feature.icon}</span>
                  <h3 className="text-xl font-bold text-white/90 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-400 group-hover:text-white/90 transition-colors">
                  {feature.description}
                </p>
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}; 