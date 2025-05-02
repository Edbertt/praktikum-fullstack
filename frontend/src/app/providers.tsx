"use client";

import { SidebarProvider } from "@/component/Layouts/sidebar/sidebar-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (

      <SidebarProvider>{children}</SidebarProvider>

  );
}
