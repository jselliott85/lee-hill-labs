import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: true, // Wrap properties within object block to clear compiler warning
  },
};

export default nextConfig;