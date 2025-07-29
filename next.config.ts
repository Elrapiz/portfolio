import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://cdn.simpleicons.org/**"),
      new URL("https://developer.mozilla.org/**")
    ]
  }
};

export default nextConfig;
