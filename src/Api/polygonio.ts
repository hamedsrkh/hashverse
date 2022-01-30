import Axios from './index'
import moment from "../Utils/moment";
import {timeSpans} from "../Types/types";


export const getGroupedDaily = async (date ?: string) => {
    let date_info = date
    if (!date) {
        date_info = moment().format('YYYY-MM-DD')
    }
    return await Axios.get(`/aggs/grouped/locale/global/market/crypto/${date_info}?adjusted=true`)
}

export const getAggregates = async (pair: string,
                                    from_date: string,
                                    to_date: string,
                                    size: string = '1',
                                    timeSpan: timeSpans = 'day') => {

    return await Axios.get(`/aggs/ticker/X:${pair}/range/${size}/${timeSpan}/${from_date}/${to_date}?adjusted=true&sort=asc&limit=120`)
}

