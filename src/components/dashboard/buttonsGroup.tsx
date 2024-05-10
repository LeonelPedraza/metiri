import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { FC, useState } from "react";

interface IProps {
    values: Array<string>
}


export const ButtonsGroup: FC<IProps> = ({values}) => {

    const [selectedValue, setSelectedValue] = useState(values[0].toLowerCase());

    const handleChange = (_: React.MouseEvent<HTMLElement>, value: string) => {
        setSelectedValue(value);
    };

    return (
        <ToggleButtonGroup
            color="primary"
            value={selectedValue}
            exclusive
            onChange={handleChange}
            aria-label=""
            size="small"
        >
            {
                values.map(item => (
                    <ToggleButton key={item} value={item.toLowerCase()} className="capitalize">{item.toLowerCase()}</ToggleButton>
                ))
            }
        </ToggleButtonGroup>
    );
}
