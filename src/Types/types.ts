export interface Crypto {
    T: string
    c: number
    h: number
    l: number
    n: number
    o: number
    t: number
    v: number
    vw: number
}

export type timeSpans = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute'

export type AggregateResult = {
    c: number
    h: number
    l: number
    n: number
    o: number
    t: number
    v: number
    vw: number
}

export interface Aggregates {
    adjusted: boolean
    count: number
    queryCount: number
    request_id: string
    results: AggregateResult[]
    resultsCount: number
    status: string
    ticker: string
}