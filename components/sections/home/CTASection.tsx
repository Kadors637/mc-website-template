import React from 'react';
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from 'next/link';
import { LogIn, UserPlus } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-transparent to-black/80">
      <BackgroundBeams />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Maceraya Katıl!
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Hemen giriş yap veya kayıt ol, bu eşsiz deneyimin bir parçası ol!
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link 
              href="/giris" 
              className="flex items-center gap-2 px-8 py-4 bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl text-white hover:text-primary transition-colors"
            >
              <LogIn className="w-5 h-5" />
              <span className="font-medium">Giriş Yap</span>
            </Link>
            <Link 
              href="/kayit" 
              className="flex items-center gap-2 px-8 py-4 border border-white/10 rounded-xl bg-primary text-black hover:bg-primary/90 transition-colors font-medium"
            >
              <UserPlus className="w-5 h-5" />
              <span>Kayıt Ol</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}; 