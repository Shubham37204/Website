/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // helpful if deploying to Vercel/Netlify/GitHub Pages with custom exports or no image optimization fees
  },
};

export default nextConfig;
