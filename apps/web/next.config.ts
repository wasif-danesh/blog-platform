import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    transpilePackages: ['@ui/storybook'],
    // optional, helps with ESM deps in monorepos:
    experimental: { esmExternals: 'loose' }
};

export default nextConfig;
