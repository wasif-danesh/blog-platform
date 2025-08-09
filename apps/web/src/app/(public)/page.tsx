
export const dynamic = 'force-dynamic';  // render at request time (SSR)
export const revalidate = 0; // belt & suspenders

import { headers } from 'next/headers'; // guarantees dynamic on Next/Vercel
import PublicGrid from './PublicGrid';

export default function Home() {
    headers(); // touching headers() marks the route as dynamic in all cases
    return <PublicGrid />;
}
