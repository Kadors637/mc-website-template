"use client"

import * as React from "react"
import { Home, FileText, CreditCard, Info, Users, Calendar } from "lucide-react"
import { AnimeNavBar } from "@/components/ui/anime-navbar"
import { usePathname } from "next/navigation"

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999]">
      <div className="flex justify-center pt-4">
        <AnimeNavBar
          items={[
            {
              name: "Ana Sayfa",
              url: "/",
              icon: Home,
            },
            {
              name: "Tier List",
              url: "/tierlist",
              icon: FileText,
            },
            {
              name: "Gruplar",
              url: "/groups",
              icon: Users,
            },
            {
              name: "Etkinlikler",
              url: "/etkinlikler",
              icon: Calendar,
            },
            {
              name: "Mağaza",
              url: "/magaza",
              icon: CreditCard,
            },
            {
              name: "İletişim",
              url: "/contact",
              icon: Info,
            },
          ]}
          defaultActive={pathname || "/"}
        />
      </div>
    </div>
  );
} 