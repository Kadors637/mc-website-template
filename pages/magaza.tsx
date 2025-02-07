"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MainNav } from "@/components/ui/main-nav";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { MovingBorder } from "@/components/ui/moving-border";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/utils/cn";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Product } from '@/types/product';
import { useCredit } from '@/context/CreditContext';
import { toast } from 'react-hot-toast';

const vipPackages = [
  {
    title: "VIP",
    price: "50 TL",
    description: "Temel VIP ayrıcalıkları ile oyun deneyiminizi geliştirin",
    features: [
      "Özel /fly komutu",
      "Renkli yazı yazma",
      "Özel giriş mesajı",
      "VIP sohbet erişimi",
      "2x XP boost",
    ],
    duration: "1 Ay",
    color: "from-blue-600 to-blue-400",
    link: "#vip"
  },
  {
    title: "VIP+",
    price: "100 TL",
    description: "Gelişmiş özellikler ve daha fazla ayrıcalık için",
    features: [
      "VIP özellikleri",
      "Özel eşya seti",
      "Özel particle efektleri",
      "Nick değiştirme",
      "3x XP boost",
    ],
    duration: "1 Ay",
    color: "from-purple-600 to-purple-400",
    link: "#vip-plus"
  },
  {
    title: "MVP",
    price: "200 TL",
    description: "En üst düzey VIP deneyimi için özel paket",
    features: [
      "VIP+ özellikleri",
      "Özel komutlar",
      "Özel pet sistemi",
      "Sınırsız /hat",
      "4x XP boost",
    ],
    duration: "1 Ay",
    color: "from-orange-600 to-orange-400",
    link: "#mvp"
  }
];

const products: Product[] = [
  {
    id: '1',
    name: 'Ejderha Kılıcı',
    description: 'Ejderha pullarından yapılmış efsanevi bir kılıç. Ateş hasarı verir.',
    price: 5000,
    image: '/images/store/dragon-sword.jpg',
    category: 'kılıç',
    features: ['Ateş Hasarı', 'Dayanıklı', 'Nadir'],
    stats: {
      damage: 85,
      speed: 70,
      durability: 95
    }
  },
  {
    id: '2',
    name: 'Elmas Zırh Seti',
    description: 'En kaliteli elmaslardan üretilmiş tam koruma sağlayan zırh seti.',
    price: 8000,
    image: '/images/store/diamond-armor.jpg',
    category: 'zırh',
    features: ['Tam Koruma', 'Hafif', 'Dayanıklı'],
    stats: {
      defense: 90,
      durability: 100
    }
  },
  {
    id: '3',
    name: 'Hızlı Kazma',
    description: 'Büyülü bir kazma. Madenleri çok hızlı kazar.',
    price: 3000,
    image: '/images/store/fast-pickaxe.jpg',
    category: 'araç',
    features: ['Hızlı Kazma', 'Şans Artışı'],
    stats: {
      speed: 95,
      durability: 80
    }
  },
  {
    id: '4',
    name: 'Ninja Kostümü',
    description: 'Görünmezlik sağlayan özel ninja kostümü.',
    price: 2500,
    image: '/images/store/ninja-costume.jpg',
    category: 'kozmetik',
    features: ['Görünmezlik', 'Hız Artışı']
  }
];

const ProductCard = ({ product }: { product: Product }) => {
  const { credit, deductCredit } = useCredit();
  const handleClick = () => {
    window.location.href = `/urun/${product.id}`;
  };

  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount)
    : product.price;

  const handlePurchase = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (credit < discountedPrice) {
      toast.error('Yetersiz kredi! Lütfen kredi yükleyin.');
      return;
    }

    // Satın alma işlemi
    try {
      deductCredit(discountedPrice);
      toast.success('Ürün başarıyla satın alındı!');
    } catch (error) {
      toast.error('Satın alma işlemi başarısız oldu!');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={handleClick}
      className="relative group bg-black/50 rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-colors cursor-pointer"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-110"
        />
        {product.discount && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {product.discount * 100}% İndirim
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            {product.discount && (
              <span className="text-sm text-gray-400 line-through">
                {product.price} MC
              </span>
            )}
            <div className="text-2xl font-bold text-primary">
              {Math.floor(discountedPrice)} MC
            </div>
          </div>
          
          <button 
            onClick={handlePurchase}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
          >
            Satın Al
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const StorePage = () => {
  const [filter, setFilter] = useState<Product['category'] | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products
    .filter(product => filter === 'all' || product.category === filter)
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen w-full relative">
      <BackgroundBeams />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mağaza
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            En iyi ekipmanlar ve kozmetik ürünler burada! Karakterinizi güçlendirin ve özelleştirin.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {['all', 'kılıç', 'zırh', 'araç', 'kozmetik', 'diğer'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category as Product['category'] | 'all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-black border border-[#4ade80] text-[#4ade80] shadow-[0_0_10px_rgba(74,222,128,0.3)]'
                    : 'bg-[#0a0a0a] text-gray-400 hover:bg-[#151515]'
                }`}
              >
                {category === 'all' ? 'Tümü' : category.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="w-full md:w-auto">
            <input
              type="text"
              placeholder="Ürün ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-64 px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StorePage; 