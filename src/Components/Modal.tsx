import {useState} from "react";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {Aggregates, Crypto, timeSpans} from "../Types/types"
import {
    Box,
    DialogContent,
    Divider,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent, TextField
} from "@mui/material";
import DatePicker from "./DatePicker";
import {LoadingButton} from "@mui/lab";
import SendIcon from '@mui/icons-material/Send';
import {getAggregates} from "../Api/polygonio";
import moment from "../Utils/moment";
import CryptoDetailCard from "./CryptoDetailCard";
import CloseButton from "./CloseButton";


export interface PropsType {
    open: boolean;
    closeModal: () => void
    crypto: Crypto | null
}

let initialDate = moment().toDate()

export const Modal: (props: PropsType) => JSX.Element = (props) => {
    const [fromDate, setFromDate] = useState<Date | null>(initialDate);
    const [toDate, setToDate] = useState<Date | null>(initialDate);
    const [timeSpan, setTimeSpan] = useState<timeSpans>('day');
    const [cryptoDetail, setCryptoDetail] = useState<Aggregates['results']>([]);
    const [loadingButton, setLoadingButton] = useState<boolean>(false);
    const [multiplier, setMultiplier] = useState<string>('1');

    const fetchCryptoDetail = async () => {
        try {
            setLoadingButton(true)
            if (props.crypto) {
                const from = moment(fromDate).format('YYYY-MM-DD')
                const to = moment(toDate).format('YYYY-MM-DD')
                const {data} = await getAggregates(props.crypto.T, from, to, multiplier, timeSpan)
                setLoadingButton(false)
                if (data.resultsCount > 0) {
                    setCryptoDetail(data.results)
                }else {
                    setCryptoDetail([])
                }
            }
        } catch (e) {
            setLoadingButton(false)
            console.log(e)
        }
    }
    const closeModal = ()=>{
        setCryptoDetail([])
        props.closeModal()
    }

    return (
        <div>
            <Dialog onBackdropClick={closeModal} open={props.open} fullWidth={true} maxWidth={"lg"}>
                <CloseButton close={closeModal}/>
                <DialogTitle>Crypto Detail - {props.crypto ? props.crypto.T : ''} </DialogTitle>
                <Divider/>
                <DialogContent>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <DatePicker label={'from'} date={fromDate} onChangeDate={(date) => {
                                setFromDate(date)
                            }}/>
                        </Grid>
                        <Grid item xs={6}>
                            <DatePicker label={'to'} date={toDate} onChangeDate={(date) => {
                                setToDate(date)
                            }}/>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="time-span-select-label">Age</InputLabel>
                                <Select
                                    labelId="time-span-select-label"
                                    id="time-span-select"
                                    value={timeSpan}
                                    label="Age"
                                    onChange={(event: SelectChangeEvent) => {
                                        setTimeSpan(event.target.value as timeSpans)
                                    }}
                                >
                                    <MenuItem value='hour'>hour</MenuItem>
                                    <MenuItem value='day'>day</MenuItem>
                                    <MenuItem value='week'>week</MenuItem>
                                    <MenuItem value='month'>month</MenuItem>
                                    <MenuItem value='year'>year</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <TextField label='multiplier' value={multiplier}
                                           onChange={(event) => {
                                               setMultiplier(event.target.value);
                                           }} required={true} inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <LoadingButton onClick={fetchCryptoDetail}
                                           endIcon={<SendIcon/>}
                                           loading={loadingButton}
                                           loadingPosition="end"
                                           variant="contained">
                                Fetch Data
                            </LoadingButton>
                        </Grid>
                    </Grid>
                    <Divider/>

                    <Box sx={{maxHeight:'300px', overflowY:'auto', padding:'10px'}}>
                        {cryptoDetail && cryptoDetail.length > 0 ? cryptoDetail.map((cryptoDetail, index) =>
                            <CryptoDetailCard key={`cd-${index}`} item={cryptoDetail}/>) : 'No Data Available'}
                    </Box>


                </DialogContent>
            </Dialog>
        </div>
    );
}