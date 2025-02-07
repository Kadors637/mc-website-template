import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MainNav } from "@/components/ui/main-nav";
import { Footer } from "@/components/ui/footer";
import { CreditProvider } from "@/context/CreditContext";
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAuthPage = router.pathname === '/giris' || router.pathname === '/kayit';

  return (
    <CreditProvider>
      <div className="min-h-screen flex flex-col relative">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#001219,#0a2e1d)] pointer-events-none" />
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
        
        {!isAuthPage && <MainNav />}
        <Component {...pageProps} />
        {!isAuthPage && <Footer />}
      </div>
      <Toaster position="top-right" />
    </CreditProvider>
  );
}
