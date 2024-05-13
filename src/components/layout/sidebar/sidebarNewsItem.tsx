import { Box, Paper, Stack, Typography } from "@mui/material";
import { blue, blueGrey, grey } from "@mui/material/colors";
import { FC, ReactNode } from "react";

interface IProps {
    icon: ReactNode,
    title: string,
    subtitle: string
}

export const SidebarNewsItem: FC<IProps> = ({ icon, title, subtitle }) => {
    return (
        <Stack direction='row' spacing={2}>
            <Paper elevation={0} sx={{ backgroundColor: blueGrey[100] }}>
                <Box width={40} height={40} display='flex' alignItems='center' justifyContent='center' fontSize={24} fontWeight='700' color={blue[900]}>
                    {icon}
                </Box>
            </Paper>
            <Stack>
                <Typography fontSize={15} fontWeight={600} color={grey[700]}>{title}</Typography>
                <Typography fontSize={13} color={grey[500]} sx={{ maxWidth: '10rem', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{subtitle}</Typography>
            </Stack>
        </Stack>
    );
}
