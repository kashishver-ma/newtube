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
import { useClerk, useAuth } from "@clerk/nextjs";

import Link from "next/link";
import React from "react"; //
import { auth } from "@clerk/nextjs/server";

const items = [
  {
    title: "History",
    url: "/playlist/history",
    icon: HistoryIcon,
    auth: true,
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
    auth: true,
  },
];

export const PersonalSection = () => {
  const clerk = useClerk();
  const { isSignedIn } = useAuth();

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
                onClick={(e) => {
                  if (!isSignedIn && item.auth) {
                    e.preventDefault();
                    return clerk.openSignIn();
                  }
                }}
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
