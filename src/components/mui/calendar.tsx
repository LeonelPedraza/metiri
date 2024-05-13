import { Badge, Box, Grid, Stack, Typography } from "@mui/material";
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

function CustomDay(props: PickersDayProps<Dayjs>) {
    const { day, outsideCurrentMonth, ...other } = props;
    const date = day.date();
    // const month = day.month() + 1; // dayjs month is zero-indexed, January is 0
    // const year = day.year();

    const highlight = highlightedDays.find(d => (d.day == date) ? d : undefined);

    let badgeContent;
    switch (highlight?.type) {
        case 'licencias':
            badgeContent = <Badge badgeContent="" color='secondary'></Badge>;
            break;
        case 'vencimientos':
            badgeContent = <Badge badgeContent="" color="error"></Badge>;
            break;
        case 'ausencias':
            badgeContent = <Badge badgeContent="" color="warning"></Badge>;
            break;
        case 'cumpleaños':
            badgeContent = <Badge badgeContent="" color="success"></Badge>;
            break;
        case 'aniversario':
            badgeContent = <Badge badgeContent="" color="info"></Badge>;
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
        <Grid container spacing={2}>
            <Grid item md={8}>
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
            </Grid>
            <Grid item md={4}>
                <Stack >
                    <Box display='flex' flexDirection='row' alignItems='center' gap={2}>
                        <Badge badgeContent="" color='secondary'></Badge>
                        <Typography variant="h6">Licencias</Typography>
                    </Box>
                    <Box display='flex' flexDirection='row' alignItems='center' gap={2}>
                        <Badge badgeContent="" color="error"></Badge>
                        <Typography variant="h6">Vencimientos</Typography>
                    </Box>
                    <Box display='flex' flexDirection='row' alignItems='center' gap={2}>
                        <Badge badgeContent="" color="warning"></Badge>
                        <Typography variant="h6">Ausencias</Typography>
                    </Box>
                    <Box display='flex' flexDirection='row' alignItems='center' gap={2}>
                        <Badge badgeContent="" color="success"></Badge>
                        <Typography variant="h6">Cumpleaños</Typography>
                    </Box>
                    <Box display='flex' flexDirection='row' alignItems='center' gap={2}>
                        <Badge badgeContent="" color="info"></Badge>
                        <Typography variant="h6">Aniversario</Typography>
                    </Box>
                </Stack>
            </Grid>
        </Grid>
    );
}
