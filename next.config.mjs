import withMarkdoc from "@markdoc/next.js";
import withSearch from "./src/markdoc/search.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md"],
  experimental: {
    scrollRestoration: true,
  },
  distDir: "dist",
};

if (!process.env.VERCEL) {
  nextConfig.output = "export";
  nextConfig.images = {
    unoptimized: true,
  };
}

export default withSearch(
  withMarkdoc({ schemaPath: "./src/markdoc" })(nextConfig)
);
