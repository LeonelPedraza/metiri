import { Box, Paper, Stack, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { blue } from "@mui/material/colors";

interface IProps {
    title?: string | undefined,
    children: ReactNode
}

export const CustomBox: FC<IProps> = ({ title, children }) => {
    return (
        <Paper elevation={2}>
            <Stack paddingY={2} paddingX={2} spacing={2} alignItems='center' justifyContent='space-between'>
                {
                    title &&
                    <Box display='flex' alignItems='center' justifyContent='center'>
                        <Typography variant="h5" fontWeight='600' color={blue[900]} gutterBottom>{title}</Typography>
                    </Box>
                }
                {children}
            </Stack>
        </Paper>
    );
}
