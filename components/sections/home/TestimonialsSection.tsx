import React from 'react';
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "Bu sunucuda geçirdiğim zaman inanılmazdı! Topluluk çok yardımsever ve etkinlikler çok eğlenceli.",
    name: "MCSurvivor",
    title: "VIP Oyuncu",
    avatar: "/images/avatars/player1.png"
  },
  {
    quote: "Şimdiye kadar oynadığım en iyi Minecraft sunucusu. Adminler her zaman yardımcı oluyor.",
    name: "CraftMaster",
    title: "MVP Oyuncu",
    avatar: "/images/avatars/player2.png"
  },
  {
    quote: "PvP turnuvaları ve özel etkinlikler sayesinde yeni bir macera yaşıyorum!",
    name: "PvPKing",
    title: "Elite Oyuncu",
    avatar: "/images/avatars/player3.png"
  },
  {
    quote: "Arkadaş canlısı bir topluluk ve harika oyun modları. En sevdiğim Minecraft sunucusu!",
    name: "RedstoneWizard",
    title: "Premium Oyuncu",
    avatar: "/images/avatars/player4.png"
  },
  {
    quote: "Sunucudaki oyun deneyimi gerçekten benzersiz. Kesinlikle tavsiye ediyorum!",
    name: "BuildMaster",
    title: "VIP+ Oyuncu",
    avatar: "/images/avatars/player5.png"
  },
  {
    quote: "Admin ekibi çok ilgili ve yardımsever. Sorunlar hemen çözülüyor.",
    name: "PvPMaster",
    title: "MVP+ Oyuncu",
    avatar: "/images/avatars/player6.png"
  }
];

export const TestimonialsSection = () => {
  return (
    <InfiniteMovingCards 
      items={testimonials} 
      title="Oyuncularımızın Yorumları"
      subtitle="Sunucumuzda harika vakit geçiren oyuncularımızın deneyimleri"
    />
  );
}; 