import React from 'react';
import {Box} from "@mui/material";
import {LocalizationProvider} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TextField from "@mui/material/TextField";

interface PropsType {
    date: Date | null,
    onChangeDate : (date : Date | null)=>void
}

const DatePicker : (props : PropsType) => JSX.Element = (props) => {
    return (
        <>
            <Box pt={5}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        label="date"
                        value={props.date}
                        minDate={new Date('2019-01-01')}
                        onChange={(newValue) => {
                            props.onChangeDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Box>
        </>
    );
};

export default DatePicker;
