import { ReactNode } from "react";
import { PrimarySearchAppBar } from "../components/layout/appbar";
import { SideBar } from "../components/layout/sidebar";
import { CustomBreadcrumbs } from "../components/layout/bradcrumbs";
import { Grid } from "@mui/material";



interface IProps {
    children: ReactNode
}

export const Layout = ({ children }: IProps) => {
    return (
        <>
            <PrimarySearchAppBar />
            <CustomBreadcrumbs />
            <Grid container spacing={0}>
                <Grid item xs={12} md={9.8} justifyContent='center'>
                    {children}
                </Grid>
                <Grid item xs={12} md={2.2}>
                    <SideBar />
                </Grid>
            </Grid>
        </>
    );
}
