import React from 'react';
import { useRouter } from 'next/router';
import Navbar from "@/components/ui/navbar";
import Image from 'next/image';

export default function UserProfile() {
  const router = useRouter();
  const { username } = router.query;

  // Bu kısım backend'den gelecek
  const userProfile = {
    name: username as string,
    discordId: "user123",
    banner: "/images/default-banner.jpg",
    about: "Minecraft oyuncusu",
    roles: ["Premium"],
    socialLinks: [
      { platform: "YouTube", url: "#" },
      { platform: "Instagram", url: "#" }
    ]
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
        <div className="max-w-4xl mx-auto">
          {/* Banner */}
          <div className="w-full h-48 rounded-xl overflow-hidden mb-8 relative">
            <Image
              src={userProfile.banner}
              alt="Profile Banner"
              layout="fill"
              objectFit="cover"
              className="object-center"
            />
          </div>

          {/* Profil Başlığı */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">{userProfile.name}</h1>
                <p className="text-gray-400">Discord ID: {userProfile.discordId}</p>
                <div className="flex gap-2 mt-2">
                  {userProfile.roles.map((role, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-lg bg-primary/10 text-primary border border-primary/20"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hakkında ve Sosyal Medya */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-white mb-4">Hakkında</h2>
              <p className="text-gray-400 mb-4">{userProfile.about}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Sosyal Medya</h2>
              <div className="space-y-3">
                {userProfile.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      {link.platform === "YouTube" ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                        </svg>
                      )}
                    </div>
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Paylaşımlar */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-6">Paylaşımlar</h2>
            <div className="grid grid-cols-1 gap-4">
              {/* Paylaşımlar buraya gelecek */}
              <div className="text-gray-400 text-center py-8">
                Henüz paylaşım yapılmamış
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 