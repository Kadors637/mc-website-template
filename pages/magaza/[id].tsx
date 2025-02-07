import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Navbar from "@/components/ui/navbar";
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  type: 'boost' | 'everyone' | 'giveaway' | 'description';
  duration?: number;
  features?: string[];
  longDescription?: string;
}

export default function ProductProfile() {
  const router = useRouter();
  const { id } = router.query;
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [userCredit] = useState(0);

  // Bu kısım backend'den gelecek
  const product: Product = {
    id: '1',
    name: 'Boost Süresi',
    description: 'Boost sürenizi uzatın',
    longDescription: 'Boost sürenizi uzatarak sunucumuzda daha fazla ayrıcalığa sahip olun. Premium özelliklere erişim, özel roller ve daha fazlası!',
    price: 50,
    image: 'https://i.imgur.com/YQYQZq8.jpg',
    type: 'boost',
    duration: 30,
    features: [
      'Özel Discord Rolü',
      'Özel Minecraft Prefix',
      'Sınırsız /hat Kullanımı',
      'Özel Kit Erişimi',
      'VIP Sohbet Kanalı'
    ]
  };

  const handlePurchase = () => {
    if (userCredit < product.price) {
      alert('Yetersiz kredi!');
      return;
    }

    if (!additionalInfo && product.type === 'boost') {
      alert('Lütfen boost süresini girin!');
      return;
    }

    // Backend'e satın alma isteği gönderilecek
    console.log('Satın alma işlemi:', {
      productId: product.id,
      additionalInfo
    });
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <Navbar />
      
      <main className="relative">
        <div className="container mx-auto px-4 pt-24">
          <div className="max-w-6xl mx-auto">
            {/* Ürün Banner ve Başlık */}
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4
                                 [text-shadow:0_0_10px_rgba(var(--primary-rgb),0.5)]">
                      {product.name}
                    </h1>
                    <p className="text-xl text-white/80">{product.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {product.price} TL
                    </div>
                    {product.duration && (
                      <div className="text-white/80">
                        {product.duration} Gün
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* İçerik Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Sol Kolon - Detaylı Açıklama ve Özellikler */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-[#151515] rounded-xl p-6 border border-white/10">
                  <h2 className="text-xl font-semibold text-white mb-4">Ürün Hakkında</h2>
                  <p className="text-gray-400">{product.longDescription}</p>
                </div>

                {product.features && (
                  <div className="bg-[#151515] rounded-xl p-6 border border-white/10">
                    <h2 className="text-xl font-semibold text-white mb-4">Özellikler</h2>
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-400">
                          <svg className="w-5 h-5 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sağ Kolon - Satın Alma */}
              <div className="space-y-8">
                {/* Kredi Bilgisi */}
                <div className="bg-[#151515] rounded-xl p-6 border border-white/10">
                  <h2 className="text-xl font-semibold text-white mb-4">Krediniz</h2>
                  <div className="text-3xl font-bold text-primary mb-4">{userCredit} TL</div>
                  <button
                    onClick={() => window.location.href = '/api/shopier/redirect'}
                    className="w-full px-4 py-2 bg-primary/20 text-primary rounded-lg 
                             hover:bg-primary/30 transition-colors
                             border border-primary/50 hover:border-primary"
                  >
                    Kredi Yükle
                  </button>
                </div>

                {/* Satın Alma Formu */}
                <div className="bg-[#151515] rounded-xl p-6 border border-white/10">
                  <h2 className="text-xl font-semibold text-white mb-4">Satın Al</h2>
                  {product.type === 'boost' && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Boost Süresi (Gün)
                      </label>
                      <input
                        type="number"
                        value={additionalInfo}
                        onChange={(e) => setAdditionalInfo(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                        min="1"
                      />
                    </div>
                  )}
                  {product.type === 'description' && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Özel Açıklama
                      </label>
                      <textarea
                        value={additionalInfo}
                        onChange={(e) => setAdditionalInfo(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white resize-none"
                        rows={4}
                        placeholder="Profilinizde görünecek açıklamayı girin"
                      />
                    </div>
                  )}
                  {product.type === 'everyone' && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Duyuru Metni
                      </label>
                      <textarea
                        value={additionalInfo}
                        onChange={(e) => setAdditionalInfo(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white resize-none"
                        rows={4}
                        placeholder="Discord'da yapılacak duyuruyu girin"
                      />
                    </div>
                  )}
                  <button
                    onClick={handlePurchase}
                    className="w-full px-4 py-2 bg-primary text-white rounded-lg 
                             hover:bg-primary/90 transition-colors"
                  >
                    Satın Al ({product.price} TL)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 