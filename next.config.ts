import type { NextConfig } from "next";

/**
 * POKKI — static export configuration.
 * Output goes to ./out and can be deployed to Cloudflare Pages (or any static host).
 * Vercel also works with the same output.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // Default image optimizer needs a server; we ship pre-sized local assets instead.
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
