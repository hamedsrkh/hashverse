import React, {useEffect} from 'react';
import Wrapper from "./Components/Wrapper";
import CryptoTable from "./Components/CryptoTable";
import {useAppDispatch, useAppSelector} from "./Hooks/Hooks";
import {getCryptos} from "./store/features/cryptos/cryptosSlice";
import DatePicker from './Components/DatePicker';
import {Box} from "@mui/material";
import moment from "./Utils/moment";


const App = () => {
    const [date, setDate] = React.useState<Date | null>(new Date());
    const dispatch = useAppDispatch();
    const {cryptos} = useAppSelector(state => state.cryptos)
    useEffect(() => {
        fetchCryptos()
    }, [date]);

    const fetchCryptos = () => {
        const dateStr = moment(date).format('YYYY-MM-DD')
        dispatch(getCryptos(dateStr))
    }

    return (
        <Wrapper>
            <Box paddingTop={2}>
                <DatePicker date={date} onChangeDate={(d)=>{setDate(d)}}/>
                <CryptoTable items={cryptos}/>
            </Box>
        </Wrapper>
    );
};

export default App;
