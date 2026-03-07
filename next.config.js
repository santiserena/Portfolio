/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // para styled-components sin babel extra
  },
  output: 'export', // reemplaza next export
}

module.exports = nextConfig