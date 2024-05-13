import { FC } from "react";
import { Gauge } from "@mui/x-charts";
import { Typography } from "@mui/material";

interface IProps {
    title?: string | undefined,
    value: number,
    width?: number,
    height: number
}

export const GaugeChart: FC<IProps> = ({ title, value, width, height }) => {
    return (
        <div className="flex flex-col items-center h-full justify-center py-2 rounded-sm">
            {
                title &&
                <Typography variant="h6" fontSize={14}>{title}</Typography>
            }
            <Gauge width={width} height={height} value={value} />
        </div>
    );
}
