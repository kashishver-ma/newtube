"use client";
//need to use it

import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
import {
  UserButton,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

export const AuthButton = () => {
  // todo: add diff auth states
  return (
    <>
      {/* //if signin direct show UserButton */}
      <SignedIn>
        <UserButton />
      </SignedIn>
      {/* //if no user show sigin button */}
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500
                             border-blue-500/20 rounded-full shadow-none "
          >
            <UserCircleIcon />
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
