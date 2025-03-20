import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  env: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: "pk_test_aW50ZW50LXNhaWxmaXNoLTI2LmNsZXJrLmFjY291bnRzLmRldiQ",
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
  },
};


export default nextConfig;
