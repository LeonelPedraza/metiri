import { FC, ReactNode } from "react";
import { Box, Button, Container, IconButton, List, ListItem, Stack, Typography, } from "@mui/material";
import { Tune } from '@mui/icons-material'
import { blue, red } from "@mui/material/colors";

interface IProps {
    icon: ReactNode,
    title: string,
    alert?: string | undefined,
    children: ReactNode[]
}

export const SidebarSection: FC<IProps> = ({ icon, title, alert, children }) => {
    return (
        <List dense={false}>
            <ListItem>
                <Stack width='100%' direction='row' spacing={1} justifyContent='space-between' alignItems='center'>
                    {icon}
                    <Typography variant='h6' fontWeight={550} color={blue[900]}>{title}</Typography>
                    <IconButton color="primary">
                        <Tune />
                    </IconButton>
                </Stack>

            </ListItem>
            {
                alert &&
                <Container>
                    <Typography variant="h6" fontSize='small' mt={-1} fontWeight={600} color={red[600]}>{alert}</Typography>
                </Container>

            }
            {children}
            <Box padding={2}>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    fullWidth
                >
                    Ver todo
                </Button>
            </Box>
        </List>
    );
}
