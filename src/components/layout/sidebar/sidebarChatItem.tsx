import { Box, Paper, Stack, Typography } from "@mui/material";
import { blue, blueGrey, grey } from "@mui/material/colors";
import { FC } from "react";

interface IProps {
    from: string,
    message: string
}

export const SidebarChatItem: FC<IProps> = ({ from, message }) => {
    return (
        <Stack direction='row' spacing={2}>
            <Paper elevation={0} sx={{ backgroundColor: blueGrey[100] }}>
                <Box width={40} height={40} display='flex' alignItems='center' justifyContent='center' fontSize={24} fontWeight='700' color={blue[900]}>
                    {from.charAt(0)}
                </Box>
            </Paper>
            <Stack>
                <Typography fontSize={15} fontWeight={600} color={grey[700]}>{from}</Typography>
                <Typography fontSize={13} color={grey[500]} sx={{ maxWidth: '10rem', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{message}</Typography>
            </Stack>
        </Stack>
    );
}
