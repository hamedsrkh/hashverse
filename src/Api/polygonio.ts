import Axios from './index'


export const getGroupedDaily = async (date ?: string) => {
    let date_info = date
    if (!date) {
        let newDate = new Date()
        date_info = newDate.toISOString().split('T')[0]
    }
    return await Axios.get(`/aggs/grouped/locale/global/market/crypto/${date_info}?adjusted=true`)
}

type timeSpans = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute'
export const getAggregates = async (pair: string,
                                    from_date: string,
                                    to_date: string,
                                    size: string = '1',
                                    timeSpan: timeSpans = 'day') => {

    return await Axios.get(`/aggs/ticker/X:${pair}/range/${size}}/${timeSpan}/${from_date}/${to_date}?adjusted=true&sort=asc&limit=120`)
}

