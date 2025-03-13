import type { NextConfig } from "next";
import { i18n } from "./next-i18next.config";

const nextConfig: NextConfig = {
  i18n,
  async rewrites() {
    return [
      {
        source: '/rss',
        destination: '/api/rss'
      }
    ];
  }  
};

export default nextConfig;
