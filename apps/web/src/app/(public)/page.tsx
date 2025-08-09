// apps/web/src/app/(public)/page.tsx
'use client';
import { Container, Grid } from '@mui/material';
import { PostCard } from '@ui/storybook';

export default function Home() {
    return (
        <Container sx={{ py: 6 }}>
            <Grid container spacing={3}>
                {Array.from({ length: 6 }).map((_, i) => (
                    <Grid key={i} item xs={12} sm={6} md={4}>
                        <PostCard title={`Post ${i + 1}`} excerpt="Subheading" />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
