import { ReactNode } from "react";
import { AppBar } from "../components/layout/appbar";
import { SideBar } from "../components/layout/sidebar";
import { Breadcrumbs } from "../components/layout/bradcrumbs";
import { Grid } from "@mui/material";



interface IProps {
    children: ReactNode
}

export const Layout = ({ children }: IProps) => {
    return (
        <div>
            <AppBar />
            <Breadcrumbs />
            <Grid container spacing={0} className="h-screen">
                <Grid xs={12} md={10}>
                    {children}
                </Grid>
                <Grid xs={12} md={2} className="col-span-1">
                    <SideBar />
                </Grid>
            </Grid>
        </div >
    );
}
