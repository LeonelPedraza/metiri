import { FC, ReactNode } from "react";
import { Button, IconButton, } from "@mui/material";
import { Tune } from '@mui/icons-material'

interface IProps {
    icon: ReactNode,
    title: string,
    alert?: string | undefined,
    children: ReactNode
}

export const SidebarSection: FC<IProps> = ({ icon, title, alert, children }) => {
    return (
        <div className="flex flex-col gap-2 p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {icon}
                    <h1 className="text-blue-700 text-lg font-semibold">{title}</h1>
                </div>
                <IconButton color="primary">
                    <Tune/>
                </IconButton>
            </div>
            {
                alert &&
                <span className="text-red-500 font-semibold" >{alert}</span>

            }
            {children}
            <div className="w-full">
                <Button 
                    variant="contained" 
                    color="primary" 
                    size="small" 
                    fullWidth
                >
                    Ver todo
                </Button>
            </div>
        </div>
    );
}
