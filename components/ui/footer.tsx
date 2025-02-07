"use client";

import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-black/50 border-t border-white/10 backdrop-blur-lg py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#4ade80] to-[#2bcc63] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">M</span>
              </div>
              <span className="text-[#4ade80] font-bold text-xl">MCServer</span>
            </Link>
            <p className="text-gray-400">
              MCServer, en iyi Minecraft deneyimini yaşamanın en hızlı yoludur. 
              Sunucumuzda eğlenceli vakit geçirin ve yeni arkadaşlar edinin.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tier-list" className="text-gray-400 hover:text-[#4ade80] transition-colors">
                  Tier List
                </Link>
              </li>
              <li>
                <Link href="/gruplar" className="text-gray-400 hover:text-[#4ade80] transition-colors">
                  Gruplar
                </Link>
              </li>
              <li>
                <Link href="/magaza" className="text-gray-400 hover:text-[#4ade80] transition-colors">
                  Mağaza
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#4ade80] transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-white font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="text-[#4ade80]">IP:</span> play.mcserver.com
              </li>
              <li>
                <a 
                  href="https://discord.gg/mcserver" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#4ade80] transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@mcserver.com"
                  className="text-gray-400 hover:text-[#4ade80] transition-colors"
                >
                  info@mcserver.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} MCServer. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
} 