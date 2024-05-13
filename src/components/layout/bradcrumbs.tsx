import { Update } from '@mui/icons-material'
import { Box, Breadcrumbs, Link, Stack, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

const lastUpdate = '12:05'

export const CustomBreadcrumbs = () => {
    return (
        <Stack direction='row' justifyContent='space-between' alignItems='center' paddingX={3} paddingY={1} sx={{ backgroundColor: blue[50] }}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Home
                </Link>
                <Typography color="text.primary">Dashboard</Typography>
            </Breadcrumbs>
            <Box display='flex' alignItems='center' gap={1}>
                <Update color='disabled'/>
                <Typography fontSize={15} color={grey[800]}>
                    Ultima actualización: {lastUpdate}
                </Typography>
            </Box>
        </Stack>
    );
}
