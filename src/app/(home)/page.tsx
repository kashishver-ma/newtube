"use client";

import { trpc } from "@/trpc/client";

// import Image from "next/image";
//parenthesisi() - to catergoris in same folder
export default function Home() {
  // console.log("Clerk Key:", process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

  const { data } = trpc.hello.useQuery({ text: "Kashish" });

  return <div>i will load video in the future..</div>;
}
