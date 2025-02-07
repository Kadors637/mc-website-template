import Navbar from "@/components/ui/navbar";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "VIP",
    price: "50 TL",
    features: [
      "Özel prefix",
      "Renkli chat",
      "5 home noktası",
      "Özel particle efektleri",
      "/hat komutu",
      "Uçma izni (lobby)",
      "VIP tag",
    ],
    popular: false,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "MVP",
    price: "100 TL",
    features: [
      "VIP özellikleri",
      "10 home noktası",
      "Uçma izni (tüm sunucularda)",
      "Özel komutlar",
      "Özel kıyafetler",
      "Nick değiştirme",
      "MVP tag",
      "Özel evcil hayvanlar",
    ],
    popular: true,
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "ELITE",
    price: "200 TL",
    features: [
      "MVP özellikleri",
      "Sınırsız home",
      "Özel eşyalar",
      "Özel efektler",
      "Premium destek",
      "ELITE tag",
      "Özel skin",
      "Özel emojiler",
      "Özel giriş mesajı",
      "/repair komutu",
    ],
    popular: false,
    color: "from-yellow-500 to-yellow-600",
  },
];

export default function Tiers() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            Tier Listesi
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sunucumuzda size en uygun tier'ı seçin ve ayrıcalıklı özelliklerin keyfini çıkarın.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${
                tier.popular ? 'ring-2 ring-primary' : ''
              } bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-xl`}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-fit">
                  <span className="bg-primary text-white text-sm font-medium px-4 py-1 rounded-full">
                    En Popüler
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">{tier.name}</h3>
                <div className={`bg-gradient-to-r ${tier.color} text-white text-3xl font-bold py-2 px-4 rounded-lg mb-6`}>
                  {tier.price}
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600 dark:text-gray-400">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-4 rounded-xl font-medium transition-colors ${
                  tier.popular
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}>
                  Satın Al
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
} 