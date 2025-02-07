import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from "@/components/ui/navbar";
import { useCredit } from '@/context/CreditContext';
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'vip' | 'kit' | 'coin' | 'cosmetic';
  features: string[];
  popular?: boolean;
}

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { credit, removeCredit } = useCredit();
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  // Bu kısım normalde API'den gelecek
  const product: Product = {
    id: '1',
    name: 'VIP+',
    description: 'En popüler VIP paketimiz ile özel avantajlara sahip olun! Sunucumuzda benzersiz bir deneyim yaşamak için tasarlandı.',
    price: 100,
    image: '/images/products/vip.png',
    category: 'vip',
    features: [
      'Özel isim rengi',
      '/fly komutu',
      'Özel spawn noktası',
      'VIP sohbet erişimi',
      '2x coin kazanma',
      'Özel eşyalar',
      'Haftalık hediyeler',
      'Öncelikli destek'
    ],
    popular: true
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Grid arka plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #ffffff15 1px, transparent 1px),
                           linear-gradient(to bottom, #ffffff15 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 relative">
        <div className="max-w-6xl mx-auto">
          {/* Geri Butonu */}
          <Link
            href="/magaza"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 group"
          >
            <svg 
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>Mağazaya Dön</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sol Kolon - Ürün Görseli */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square rounded-2xl overflow-hidden border border-[#4ade80] shadow-[0_0_30px_rgba(74,222,128,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              {product.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-110 transition-transform duration-500"
                />
              )}
              {product.popular && (
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  Popüler
                </div>
              )}
            </motion.div>

            {/* Sağ Kolon - Ürün Bilgileri */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>
                <p className="text-gray-400 text-lg">{product.description}</p>
              </div>

              {/* Fiyat ve Satın Al */}
              <div className="bg-[#0a0a0a]/80 backdrop-blur-sm p-6 rounded-2xl border border-[#4ade80] shadow-[0_0_15px_rgba(74,222,128,0.3)]">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Fiyat</div>
                    <div className="text-3xl font-bold text-primary">{product.price} MC</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">Mevcut Krediniz</div>
                    <div className="text-xl font-bold text-white">{credit} MC</div>
                  </div>
                </div>
                <button
                  onClick={() => setShowPurchaseModal(true)}
                  className="w-full px-6 py-4 bg-primary text-black rounded-xl font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
                >
                  <span>Hemen Satın Al</span>
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* Özellikler */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Paket Özellikleri</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Satın Alma Modal */}
      {showPurchaseModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
             onClick={() => setShowPurchaseModal(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#0a0a0a] rounded-2xl p-8 max-w-md w-full border border-[#4ade80] shadow-[0_0_30px_rgba(74,222,128,0.3)]"
            onClick={e => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Satın Alma Onayı</h2>
            <p className="text-gray-400 mb-6">
              <span className="text-primary font-medium">{product.name}</span> ürününü{' '}
              <span className="text-primary font-medium">{product.price} MC</span> karşılığında satın almak istiyor musunuz?
            </p>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowPurchaseModal(false)}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
              >
                İptal
              </button>
              <button
                onClick={() => {
                  if (credit >= product.price) {
                    removeCredit(product.price);
                    setShowPurchaseModal(false);
                    // Başarılı satın alma işlemi
                  } else {
                    // Yetersiz kredi uyarısı
                  }
                }}
                className="px-6 py-2 bg-primary text-black rounded-xl font-medium hover:bg-primary/90 transition-colors"
              >
                Onayla
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
} 