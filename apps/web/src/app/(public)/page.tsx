'use client';

import { AppBar, Toolbar, Typography, Container, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import { PostCard } from '@ui/storybook';

export default function Home() {
    return (
        <>
            <AppBar position="static" color="default" elevation={0}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>Blog</Typography>
                </Toolbar>
            </AppBar>

            <Container sx={{ py: 6 }}>
                <Grid container spacing={3}>
                    {Array.from({ length: 6 }).map((_, i) => (
                        <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                            {/* You can keep using your shared PostCard */}
                            <PostCard title={`Post ${i + 1}`} excerpt="Subheading" />
                            {/* Or a quick inline card:
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="h6">Post {i + 1}</Typography>
                                    <Typography variant="body2" color="text.secondary">Subheading</Typography>
                                </CardContent>
                            </Card>
                            */}
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}
