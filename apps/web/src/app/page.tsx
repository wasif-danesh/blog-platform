// Render at request time to bypass static prerender glitches on Vercel
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import PublicGrid from './components/PublicGrid'; // client component

export default function Home() {
    return <PublicGrid />;
}