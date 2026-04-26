import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isProd ? 'export' : undefined,
  basePath: isProd ? '/garden' : '',
  assetPrefix: isProd ? '/garden' : '',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default withMDX(nextConfig);