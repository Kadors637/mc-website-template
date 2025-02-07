import React from 'react';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { FeaturesSection } from '@/components/sections/home/FeaturesSection';
import { TeamSection } from '@/components/sections/home/TeamSection';
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection';
import { RecentEventsSection } from '@/components/sections/home/RecentEventsSection';

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <div className="w-full min-h-screen relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#4ade80]/10 via-[#4ade80]/5 to-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <div className="absolute inset-0 bg-grid-white/[0.05]" />
        </div>
        
        <div className="w-full">
          <HeroSection />
          <FeaturesSection />
          <TeamSection />
          <TestimonialsSection />
          <RecentEventsSection />
        </div>
      </div>
    </main>
  );
}
