import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Product } from '@/types/product';

// Geçici ürün verisi - gerçek uygulamada API'den gelecek
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
  // ... Diğer ürünler
];

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <h1 className="text-2xl text-white">Ürün bulunamadı</h1>
      </div>
    );
  }

  const handleBuy = () => {
    // Satın alma işlemi
    console.log('Satın alınıyor:', product.name, 'Miktar:', quantity);
  };

  return (
    <div className="min-h-screen w-full relative">
      <BackgroundBeams />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 relative z-10">
        <div className="mb-8">
          <button
            onClick={() => router.push('/magaza')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <svg 
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Mağazaya Dön</span>
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/50 rounded-xl overflow-hidden border border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative h-96 lg:h-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-4xl font-bold text-white">{product.name}</h1>
                  <span className="px-4 py-2 bg-primary/20 text-primary rounded-full">
                    {product.category.toUpperCase()}
                  </span>
                </div>
                <p className="text-gray-400 text-lg">{product.description}</p>
              </div>

              {product.stats && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-white mb-4">İstatistikler</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {product.stats.damage && (
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Hasar</div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 flex-1 bg-white/10 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-red-500"
                              style={{ width: `${product.stats.damage}%` }}
                            />
                          </div>
                          <span className="text-white">{product.stats.damage}</span>
                        </div>
                      </div>
                    )}
                    {product.stats.defense && (
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Savunma</div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 flex-1 bg-white/10 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-blue-500"
                              style={{ width: `${product.stats.defense}%` }}
                            />
                          </div>
                          <span className="text-white">{product.stats.defense}</span>
                        </div>
                      </div>
                    )}
                    {product.stats.speed && (
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Hız</div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 flex-1 bg-white/10 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-yellow-500"
                              style={{ width: `${product.stats.speed}%` }}
                            />
                          </div>
                          <span className="text-white">{product.stats.speed}</span>
                        </div>
                      </div>
                    )}
                    {product.stats.durability && (
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Dayanıklılık</div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 flex-1 bg-white/10 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-green-500"
                              style={{ width: `${product.stats.durability}%` }}
                            />
                          </div>
                          <span className="text-white">{product.stats.durability}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {product.features && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-white mb-4">Özellikler</h2>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/5 rounded-full text-white/90"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between mt-8">
                <div className="space-y-1">
                  {product.discount && (
                    <span className="text-sm text-gray-400 line-through">
                      {product.price} MC
                    </span>
                  )}
                  <div className="text-3xl font-bold text-primary">
                    {Math.floor(product.discount ? product.price * (1 - product.discount) : product.price)} MC
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-white/5 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-white hover:bg-white/10 rounded-l-lg transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 text-white font-medium">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-white hover:bg-white/10 rounded-r-lg transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleBuy}
                    className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
                  >
                    Satın Al
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetailPage; 