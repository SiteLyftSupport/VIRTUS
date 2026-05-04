import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://d8j0ntlcm91z4.cloudfront.net/**"),
    ],
  },
};

export default nextConfig;
