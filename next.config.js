/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'],
        // remotePatterns: [
        //     { hostname: 'cdn.sanity.io' },
        //     { hostname: 'source.unsplash.com' },
        // ],
    },
}

module.exports = nextConfig
