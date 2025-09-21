/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },
    // This setting is for newer Next.js versions to exclude files from the build output.
    outputFileTracingExcludes: {
        '*': ['**/*']
    },
    // Ensures that all exported paths have a trailing slash (e.g., /about/)
    trailingSlash: true,
};

export default nextConfig;
