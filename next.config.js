/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // optimizeCss: true, 만약, tailwind CSS를 서버사이드에서 진행하고 싶다면 주석 해제
  },
};

module.exports = nextConfig;
