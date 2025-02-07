import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-black/80 backdrop-blur-xl border-t border-white/10">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-[#4ade80] font-bold text-lg mb-4">MCServer</h3>
            <p className="text-gray-400 text-sm">En iyi Minecraft deneyimi için doğru adres.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li><Link href="/rules" className="text-gray-400 hover:text-[#4ade80] text-sm transition-colors">Kurallar</Link></li>
              <li><Link href="/store" className="text-gray-400 hover:text-[#4ade80] text-sm transition-colors">Market</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#4ade80] text-sm transition-colors">İletişim</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Topluluk</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#4ade80] text-sm transition-colors">Discord</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#4ade80] text-sm transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#4ade80] text-sm transition-colors">Twitter</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Sunucu IP</h4>
            <div className="flex items-center gap-2 bg-black/50 p-3 rounded-lg border border-white/10">
              <span className="text-[#4ade80] text-sm font-medium">play.mcserver.com</span>
              <button 
                onClick={() => navigator.clipboard.writeText('play.mcserver.com')}
                className="text-gray-400 hover:text-[#4ade80] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} MCServer. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
} 