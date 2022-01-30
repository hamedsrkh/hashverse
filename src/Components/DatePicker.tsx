import React from 'react';
import {LocalizationProvider} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TextField from "@mui/material/TextField";

interface PropsType {
    date: Date | null,
    label?: string
    onChangeDate: (date: Date | null) => void
}

const DatePicker: (props: PropsType) => JSX.Element = (props) => {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label={props.label ?? 'date'}
                    value={props.date}
                    minDate={new Date('2020-07-01')}
                    maxDate={new Date()}
                    onChange={(newValue) => {
                        props.onChangeDate(newValue);
                    }}

                    renderInput={(params) => <TextField sx={{width:'100%'}}  {...params} />}
                />
            </LocalizationProvider>
        </>
    );
};

export default DatePicker;
