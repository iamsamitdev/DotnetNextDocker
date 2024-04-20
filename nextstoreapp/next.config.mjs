/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // export, standalone, browser, node
  // distDir: 'out',
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'itgenius.co.th',
        pathname: '**',
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "dotnetapi",
        pathname: "**",
      },
    ],
    minimumCacheTTL: 0, // 0 seconds
  },
}

export default nextConfig
