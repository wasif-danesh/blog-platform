'use client';

import {AppBar, Container, Grid, Toolbar, Typography} from '@mui/material';
import { PostCard } from '@ui/storybook';

export default function PublicGrid() {
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
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}
