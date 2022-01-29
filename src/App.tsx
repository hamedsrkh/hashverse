import React, {useEffect} from 'react';
import Wrapper from "./Components/Wrapper";
import CryptoTable from "./Components/CryptoTable";
import {useAppDispatch, useAppSelector} from "./Hooks/Hooks";
import {getCryptos} from "./store/features/cryptos/cryptosSlice";
import DatePicker from './Components/DatePicker';


const App = () => {
    const [date, setDate] = React.useState<Date | null>(new Date());
    const dispatch = useAppDispatch();
    const {cryptos} = useAppSelector(state => state.cryptos)
    useEffect(() => {
        fetchCryptos()
    }, []);

    const fetchCryptos = (date ?: string) => {
        dispatch(getCryptos(date))
    }

    const changeDate = (date : Date | null) => {
      if (date){
          setDate(date);
          fetchCryptos(date.toISOString().split('T')[0])
      }
    }

    return (
        <Wrapper>
            <DatePicker date={date} onChangeDate={changeDate}/>
            <CryptoTable items={cryptos}/>
        </Wrapper>
    );
};

export default App;
