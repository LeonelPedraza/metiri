import { FC } from "react";
import { Gauge } from "@mui/x-charts";

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
                <h4 className="text-sm">{title}</h4>
            }
            <Gauge width={width} height={height} value={value} />
        </div>
    );
}
