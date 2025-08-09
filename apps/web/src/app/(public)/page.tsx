'use client';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent } from '@mui/material';
export default function Home() {
    return (
        <>
            <AppBar position="static" color="default" elevation={0}>
                <Toolbar><Typography variant="h6" sx={{ flexGrow: 1 }}>Blog</Typography></Toolbar>
            </AppBar>
            <Container sx={{ py: 6 }}>
                <Grid container spacing={3}>
                    {Array.from({ length: 6 }).map((_, i) => (
                        <Grid key={i} item xs={12} sm={6} md={4}>
                            <Card variant="outlined"><CardContent>
                                <Typography variant="h6">Post title {i+1}</Typography>
                                <Typography variant="body2" color="text.secondary">Subheading</Typography>
                            </CardContent></Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}
