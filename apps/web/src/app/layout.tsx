import type { Metadata } from 'next';
import Providers from './providers';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'; // Next 15.x

export const metadata: Metadata = {
    title: 'Blog Platform',
    description: 'Public + Admin',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            {/* Insertion point is fine to keep */}
            <meta name="emotion-insertion-point" content="emotion-insertion-point" />
        </head>
        <body>
        <AppRouterCacheProvider options={{ key: 'mui' }}>
            <Providers>{children}</Providers>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
