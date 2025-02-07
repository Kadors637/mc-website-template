import React, { useState } from 'react';
import Image from 'next/image';
import { useCredit } from '@/context/CreditContext';

interface CreditPackage {
  id: string;
  amount: number;
  price: number;
  bonus?: number;
}

export default function CreditPage() {
  const { credit, addCredit } = useCredit();

  const creditPackages: CreditPackage[] = [
    { id: '1', amount: 50, price: 50 },
    { id: '2', amount: 100, price: 95, bonus: 5 },
    { id: '3', amount: 200, price: 180, bonus: 20 },
    { id: '4', amount: 500, price: 450, bonus: 50 },
  ];

  // Test için kredi ekleme fonksiyonu
  const handleAddCredit = (amount: number) => {
    addCredit(amount);
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <main className="relative">
        <div className="container mx-auto px-4 pt-24">
          <div className="max-w-4xl mx-auto">
            {/* Kredi Bilgisi */}
            <div className="bg-[#151515] rounded-xl p-8 border border-white/10 mb-8">
              <h1 className="text-4xl font-bold text-white mb-2 
                           [text-shadow:0_0_10px_rgba(var(--primary-rgb),0.5)]">
                Kredi Bakiyeniz
              </h1>
              <div className="text-5xl font-bold text-primary mb-4">
                {credit} TL
              </div>
              <p className="text-gray-400">
                Kredi yükleyerek mağazamızdaki ürünleri satın alabilirsiniz.
              </p>
            </div>

            {/* Kredi Paketleri */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {creditPackages.map((pkg) => (
                <div key={pkg.id} className="bg-[#151515] rounded-xl p-6 border border-white/10
                                           hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)]
                                           transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{pkg.amount} TL</h3>
                      {pkg.bonus && (
                        <span className="text-primary text-sm">+{pkg.bonus} TL Bonus</span>
                      )}
                    </div>
                    <div className="text-2xl font-bold text-primary">{pkg.price} TL</div>
                  </div>
                  
                  {/* Test için kredi ekleme butonu */}
                  <button
                    onClick={() => handleAddCredit(pkg.amount + (pkg.bonus || 0))}
                    className="w-full px-4 py-3 bg-primary text-white rounded-lg 
                             hover:bg-primary/90 transition-colors
                             group relative overflow-hidden"
                  >
                    <span className="relative z-10">Kredi Yükle</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 opacity-0 
                                  group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>
              ))}
            </div>

            {/* Bilgilendirme */}
            <div className="mt-8 p-6 bg-[#151515] rounded-xl border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-4">Nasıl Kredi Yüklerim?</h2>
              <ol className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3 mt-0.5">1</span>
                  <span>Yukarıdaki paketlerden size uygun olanı seçin</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3 mt-0.5">2</span>
                  <span>Kredi Yükle butonuna tıklayın</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3 mt-0.5">3</span>
                  <span>Ödeme yöntemini seçin ve ödemeyi tamamlayın</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3 mt-0.5">4</span>
                  <span>Kredileriniz anında hesabınıza tanımlanacaktır</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 