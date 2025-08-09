'use client';
import { AppBar, Toolbar, Typography, Drawer, Box } from '@mui/material';
export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed"><Toolbar><Typography variant="h6">Admin</Typography></Toolbar></AppBar>
            <Drawer variant="permanent" sx={{ width: 240, '& .MuiDrawer-paper': { width: 240, top: 64 } }} open />
            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, ml: 30 }}>{children}</Box>
        </Box>
    );
}
