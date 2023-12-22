module.exports = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  swcMinify: true,

  experimental: {
    modularizeImports: {
      '@mui/material': {
        transform: '@mui/material/{{member}}',

        preventFullImport: true,
      },
      '@mui/icons-material': {
        transform: '@mui/icons-material/{{member}}',

        preventFullImport: true,
      },
    },
  },
}
