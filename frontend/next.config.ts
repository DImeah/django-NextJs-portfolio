import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "http://localhost:3000",
    "https://127.0.0.1:3000",
    "https://localhost:3000",
    "http://172.30.176.1:3000",
    "http://172.30.176.1:3000",
  ],
};

export default nextConfig;
