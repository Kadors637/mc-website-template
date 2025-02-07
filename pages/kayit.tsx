import { useState } from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Şifreler eşleşmiyor!');
      return;
    }
    console.log('Register attempt:', formData);
  };

  return (
    <div className="min-h-screen w-full relative">
      <BackgroundBeams />

      {/* Back Button */}
      <Link 
        href="/"
        className="absolute top-4 left-4 text-white flex items-center gap-2 z-50"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Geri Dön</span>
      </Link>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-md mx-4">
          <div className="bg-black/50 backdrop-blur-xl rounded-xl p-8 border border-white/10">
            <h1 className="text-3xl font-bold text-white mb-6 text-center">Kayıt Ol</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-white mb-2">
                  Kullanıcı Adı
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#4ade80]"
                  placeholder="kullaniciadi"
                  required
                  minLength={3}
                  maxLength={20}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#4ade80]"
                  placeholder="ornek@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                  Şifre
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#4ade80]"
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-2">
                  Şifre Tekrar
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#4ade80]"
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 bg-[#4ade80] text-white font-medium rounded-lg hover:bg-[#4ade80]/90 transition-colors"
              >
                Kayıt Ol
              </button>

              <p className="text-center text-white/70">
                Zaten hesabın var mı?{' '}
                <Link href="/giris" className="text-[#4ade80] hover:text-[#4ade80]/90 transition-colors">
                  Giriş Yap
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 