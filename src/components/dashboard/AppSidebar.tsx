"use client";
import { Home, Inbox } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { SidebarProfile } from "../sidebarProfile";
import React from "react";

// Menu items.
const items = [
  { title: "Home", url: "/dashboard", icon: Home },
  {
    title: "Data Barang",
    url: "/dashboard/barang",
    icon: Inbox,
  },
];

export function AppSidebar() {
  const [open, setOpen] = React.useState(true);
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild onClick={() => setOpen(!open)}>
                    <a href={item.url}>
                      <item.icon />
                      <p>{item.title}</p>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* 👇 Profile pinned to the bottom */}
      <SidebarFooter>
        <SidebarProfile />
      </SidebarFooter>
    </Sidebar>
  );
}
