import React from 'react';
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "GameMaster",
    designation: "Sunucu Sahibi",
    image: "/images/team/gamemaster.png",
  },
  {
    id: 2,
    name: "BuildMaster",
    designation: "Baş Admin",
    image: "/images/team/buildmaster.png",
  },
  {
    id: 3,
    name: "EventMaster",
    designation: "Event Yöneticisi",
    image: "/images/team/eventmaster.png",
  },
  {
    id: 4,
    name: "CommunityLead",
    designation: "Topluluk Lideri",
    image: "/images/team/communitylead.png",
  },
];

export const TeamSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black/50 via-black/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ekibimizle Tanışın
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Size en iyi hizmeti sunmak için çalışan profesyonel ekibimiz
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {people.map((person) => (
            <div key={person.id} className="group relative">
              <AnimatedTooltip item={person} />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                  {person.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {person.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 