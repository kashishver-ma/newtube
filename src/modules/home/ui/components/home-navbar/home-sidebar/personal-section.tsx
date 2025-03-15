"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from "lucide-react";

import Link from "next/link";
import React from "react"; //

const items = [
  {
    title: "History",
    url: "/playlist/history",
    icon: HistoryIcon,
  },
  {
    title: "Liked Videos",
    url: "/playlist/liked", // ✅ Fixed missing `/`
    icon: ThumbsUpIcon,
    auth: true,
  },
  {
    title: "All Playlist",
    url: "/playlist",
    icon: ListVideoIcon,
  },
];

export const PersonalSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>You</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={false} //todo: later
                onClick={() => {}} //todo:
              >
                <Link href={item.url} className="flex items-center gap-4">
                  {React.createElement(item.icon, {
                    className: "w-5 h-5",
                  })}

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
