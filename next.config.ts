import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    INOREADER_USER_ID: process.env.INOREADER_USER_ID,
  },
};

export default nextConfig;
