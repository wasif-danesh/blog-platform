// Force SSR (no SSG) and disable ISR
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import PublicGrid from './PublicGrid'; // client component

export default function Home() {
    return <PublicGrid />;
}
