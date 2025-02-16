/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        // pathname: "/t/p/original/**", // This matches the specific image path pattern
      },
    ],
  },
};

export default nextConfig;
