'use client';

import { Card, CardContent, Typography } from '@mui/material';

export function PostCard({ title, excerpt }: { title: string; excerpt?: string }) {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h6">{title}</Typography>
                {excerpt && <Typography variant="body2" color="text.secondary">{excerpt}</Typography>}
            </CardContent>
        </Card>
    );
}
