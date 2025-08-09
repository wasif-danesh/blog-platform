// Force SSR (no SSG) for this route
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import dynamic from 'next/dynamic';

// ⬇️ Load the client component without SSR to avoid client-manifest issues
const PublicGrid = dynamic(() => import('./PublicGrid'), { ssr: false });

export default function Home() {
    return <PublicGrid />;
}
