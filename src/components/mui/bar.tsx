import { FC, ReactNode } from "react";
import { BarChart } from "@mui/x-charts";

const dataset = [
    {
        seoul: 21,
        date: '2sem',
    },
    {
        seoul: 28,
        date: '1sem',
    },
    {
        seoul: 41,
        date: 'hoy',
    },
];

interface IProps {
    children?: ReactNode | undefined
}

export const Bar: FC<IProps> = ({ children }) => {

    const chartSetting = {
        series: [{ dataKey: 'seoul' }],
        height: 300
    };

    return (
        <div className="flex flex-col items-center justify-center py-2 shadow-md rounded-sm">
            {
                children && children
            }
            <BarChart
                xAxis={[{ scaleType: 'band', dataKey: 'date' }]}
                dataset={dataset}
                // width={500}
                {...chartSetting}
                slotProps={{
                    bar: {
                        clipPath: `inset(0px round 10px 10px 0px 0px)`,
                    },
                }}
            />
        </div>
    );
}
