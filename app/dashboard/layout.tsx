"use client"

import type React from "react"

import { useState, useEffect } from "react"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Home, MapPin, Shield, Book, Users, Bell, Settings, LogOut, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SOSButton } from "@/components/sos-button"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar variant="sidebar" collapsible="icon">
          <SidebarHeader className="flex items-center justify-center py-4">
            <Link href="/dashboard" className="text-2xl font-bold text-rose-600">
              Naari
            </Link>
          </SidebarHeader>
          <SidebarSeparator />
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/dashboard"}>
                  <Link href="/dashboard">
                    <Home />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/dashboard/map"}>
                  <Link href="/dashboard/map">
                    <MapPin />
                    <span>Safe Map</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/dashboard/safety"}>
                  <Link href="/dashboard/safety">
                    <Shield />
                    <span>Safety Tools</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/dashboard/resources"}>
                  <Link href="/dashboard/resources">
                    <Book />
                    <span>Resources</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/dashboard/community"}>
                  <Link href="/dashboard/community">
                    <Users />
                    <span>Community</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/dashboard/alerts"}>
                  <Link href="/dashboard/alerts">
                    <Bell />
                    <span>Alerts</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/dashboard/settings"}>
                  <Link href="/dashboard/settings">
                    <Settings />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/">
                    <LogOut />
                    <span>Logout</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <div className="flex flex-col h-full">
            <header className="border-b bg-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <SidebarTrigger className="mr-4" />
                <h1 className="text-xl font-semibold">
                  {pathname === "/dashboard" && "Dashboard"}
                  {pathname === "/dashboard/map" && "Safe Map"}
                  {pathname === "/dashboard/safety" && "Safety Tools"}
                  {pathname === "/dashboard/resources" && "Resources"}
                  {pathname === "/dashboard/community" && "Community"}
                  {pathname === "/dashboard/alerts" && "Alerts"}
                  {pathname === "/dashboard/settings" && "Settings"}
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <SOSButton />
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </div>
            </header>
            <main className="flex-1 overflow-auto p-6 bg-gray-50">{children}</main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
