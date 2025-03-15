"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { FlameIcon, PlaySquareIcon, HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

// ✅ Correct Interface
interface MenuItem {
  title: string;
  url: string;
  icon: React.ElementType; // ✅ Correct type for icons
  auth?: boolean;
}

// ✅ Fix items array syntax
const items: MenuItem[] = [
  {
    title: "Home",
    url: "/",
    icon: HomeIcon,
  },
  {
    title: "Subscriptions",
    url: "/feed/subscriptions",
    icon: PlaySquareIcon,
    auth: true,
  },
  {
    title: "Trending",
    url: "/feed/trending",
    icon: FlameIcon,
  },
];

export const MainSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={false}
                onClick={() => {}}
              >
                <Link href={item.url} className="flex items-center gap-4">
                  {" "}
                  {/* ✅ Fixed className */}
                  {React.createElement(item.icon, {
                    className: "w-5 h-5",
                  })}{" "}
                  {/* ✅ Correct icon rendering */}
                  <span className="text-sm">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
