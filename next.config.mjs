/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nemas.s3.ap-southeast-1.amazonaws.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'awsimages.detik.net.id',
                port: '',
                pathname: '**',
            }
        ],
    },
};

export default nextConfig;
