import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { switzer } from "@/lib/font";
import React from "react";

const dashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className={`w-full h-full ${switzer.className} antialiased`}>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default dashboardLayout;
