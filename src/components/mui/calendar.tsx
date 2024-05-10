import { Badge } from "@mui/material";
import { DateCalendar, DayCalendarSkeleton, LocalizationProvider, PickersDay, PickersDayProps } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from "dayjs";

type HighlightedDay = {
    day: number;
    month: number;
    year: number;
    type: 'licencias' | 'vencimientos' | 'ausencias' | 'cumpleaños' | 'aniversario'
};

const highlightedDays: HighlightedDay[] = [
    { day: 10, month: 5, year: 2024, type: 'ausencias' },
    { day: 12, month: 5, year: 2024, type: 'aniversario' },
    { day: 15, month: 5, year: 2024, type: 'vencimientos' },
    { day: 20, month: 5, year: 2024, type: 'licencias' },
    { day: 25, month: 5, year: 2024, type: 'cumpleaños' }
]

function CustomDay(props: PickersDayProps<Dayjs>){
    const { day, outsideCurrentMonth, ...other } = props;
    const date = day.date();
    // const month = day.month() + 1; // dayjs month is zero-indexed, January is 0
    // const year = day.year();

    const highlight = highlightedDays.find(d => (d.day == date) ? d : undefined );

    let badgeContent;
    switch (highlight?.type) {
        case 'licencias':
            badgeContent = <div className="w-4 h-4 border-4 border-indigo-600 rounded-full"></div>;
            break;
        case 'vencimientos':
            badgeContent = <div className="w-4 h-4 border-4 border-red-600 rounded-full"></div>;
            break;
        case 'ausencias':
            badgeContent = <div className="w-4 h-4 border-4 border-amber-600 rounded-full"></div>;
            break;
        case 'cumpleaños':
            badgeContent = <div className="w-4 h-4 border-4 border-green-600 rounded-full"></div>;
            break;
        case 'aniversario':
            badgeContent = <div className="w-4 h-4 border-4 border-sky-600 rounded-full"></div>;
            break;
        default:
            badgeContent = undefined; // No badge if not a special day
    }

    return (
        <Badge key={day.day.toString()} overlap="circular" badgeContent={badgeContent}>
            <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
        </Badge>
    );
}


export const Calendar = () => {

    const initialValue = dayjs('2024-01-01');
    
    return (
        <div className="w-full flex flex-col md:flex-row justify-between">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar 
                    defaultValue={initialValue}
                    renderLoading={() => <DayCalendarSkeleton />}
                    onChange={() => { }}
                    slots={{
                        day: CustomDay
                    }}
                />
            </LocalizationProvider>
            <div className="flex flex-col flex-1 py-4 gap-2">
                <div className="flex gap-2 items-center ">
                    <div className="w-4 h-4 border-4 border-indigo-600 rounded-full"></div>
                    <span>Licencias</span>
                </div>
                <div className="flex gap-2 items-center ">
                    <div className="w-4 h-4 border-4 border-red-600 rounded-full"></div>
                    <span>Vencimientos</span>
                </div>
                <div className="flex gap-2 items-center ">
                    <div className="w-4 h-4 border-4 border-amber-600 rounded-full"></div>
                    <span>Ausencias</span>
                </div>
                <div className="flex gap-2 items-center ">
                    <div className="w-4 h-4 border-4 border-green-600 rounded-full"></div>
                    <span>Cumpleaños</span>
                </div>
                <div className="flex gap-2 items-center ">
                    <div className="w-4 h-4 border-4 border-sky-600 rounded-full"></div>
                    <span>Aniversario</span>
                </div>
            </div>
        </div>
    );
}
