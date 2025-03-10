import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/Home',
        destination: '/components/Home',
        permanent: true,
      },
      {
        source: '/AboutMe',
        destination: '/components/AboutMe',
        permanent: true,
      },
      {
        source: '/Projects',
        destination: '/components/Projects',
        permanent: true,
      },
      {
        source: '/Skills',
        destination: '/components/Skills',
        permanent: true,
      },
      {
        source: '/Contact',
        destination: '/components/Contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
