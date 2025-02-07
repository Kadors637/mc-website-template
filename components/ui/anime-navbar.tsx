"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon, User, CreditCard, LogIn, UserPlus } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCredit } from "@/context/CreditContext"
import { useRouter } from "next/navigation"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  defaultActive?: string
}

export function AnimeNavBar({ items, className, defaultActive }: NavBarProps) {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>(defaultActive || items[0].name)
  const [isMobile, setIsMobile] = useState(false)
  const { credit } = useCredit()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
    // Set active tab based on current path
    const currentItem = items.find(item => item.url === pathname)
    if (currentItem) {
      setActiveTab(currentItem.name)
    }
  }, [pathname, items])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!mounted) return null

  return (
    <motion.div 
      className="flex items-center gap-3 bg-black/50 border border-white/10 backdrop-blur-lg py-2 px-4 rounded-full shadow-lg relative"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 mr-4">
        <div className="w-8 h-8 bg-gradient-to-br from-[#4ade80] to-[#2bcc63] rounded-lg flex items-center justify-center">
          <span className="text-black font-bold text-xl">M</span>
        </div>
        <span className="text-[#4ade80] font-bold text-xl hidden md:inline">MCServer</span>
      </Link>

      {/* Navigation Items */}
      {items.map((item) => {
        const Icon = item.icon
        const isActive = activeTab === item.name
        const isHovered = hoveredTab === item.name

        return (
          <Link
            key={item.name}
            href={item.url}
            onClick={() => setActiveTab(item.name)}
            onMouseEnter={() => setHoveredTab(item.name)}
            onMouseLeave={() => setHoveredTab(null)}
            className={cn(
              "relative cursor-pointer text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300",
              "text-white/70 hover:text-white",
              isActive && "text-white"
            )}
          >
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.03, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute inset-0 bg-primary/25 rounded-full blur-md" />
                <div className="absolute inset-[-4px] bg-primary/20 rounded-full blur-xl" />
                <div className="absolute inset-[-8px] bg-primary/15 rounded-full blur-2xl" />
                <div className="absolute inset-[-12px] bg-primary/5 rounded-full blur-3xl" />
                
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
                  style={{
                    animation: "shine 3s ease-in-out infinite"
                  }}
                />
              </motion.div>
            )}

            <motion.span
              className="hidden md:inline relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {item.name}
            </motion.span>
            <motion.span 
              className="md:hidden relative z-10"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={18} strokeWidth={2.5} />
            </motion.span>
      
            <AnimatePresence>
              {isHovered && !isActive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                />
              )}
            </AnimatePresence>
          </Link>
        )
      })}

      {/* Right Side Items */}
      <div className="flex items-center gap-3 ml-4">
        <Link
          href="/kredi"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#4ade80] rounded-lg border border-[#4ade80]/20 hover:bg-[#4ade80]/5 transition-all"
        >
          <CreditCard className="w-4 h-4" />
          <span className="hidden md:inline">{credit} MC</span>
        </Link>

        <Link
          href="/profile"
          className="p-2 text-[#4ade80] hover:text-[#4ade80] rounded-lg hover:bg-[#4ade80]/5 transition-all"
        >
          <User className="w-5 h-5" />
        </Link>

        <Link
          href="/giris"
          className="hidden md:flex px-4 py-2 text-sm font-medium text-black bg-[#4ade80] rounded-lg hover:bg-[#4ade80]/90 transition-all"
        >
          Giriş
        </Link>

        <Link
          href="/kayit"
          className="hidden md:flex px-4 py-2 text-sm font-medium text-black bg-[#4ade80] rounded-lg hover:bg-[#4ade80]/90 transition-all"
        >
          Kayıt
        </Link>
      </div>

      <style jsx global>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </motion.div>
  )
} 