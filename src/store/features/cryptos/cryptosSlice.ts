import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {getGroupedDaily} from "../../../Api/polygonio";
import { Crypto } from "../../../Types/types"

export interface CryptoState {
    cryptos: Crypto[]
    status: null | string
}

const initialState: CryptoState = {
    cryptos: [],
    status: null
}


export const getCryptos = createAsyncThunk(
    "cryptos/getCryptos",
    async (date: string | undefined  = undefined, getState) => {
        const { data } = await getGroupedDaily(date)
        return data.results ? data.results : []
    }
)

export const cryptoSlice = createSlice({
    name: 'items',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getCryptos.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(getCryptos.fulfilled, (state, action) => {
            state.status = 'success'
            state.cryptos = action.payload
        })
        builder.addCase(getCryptos.rejected, (state, action) => {
            state.status = 'failed'
        })
    },
    reducers: {
        test: (state) => {
            state.cryptos = []
        },
    },
})


export default cryptoSlice.reducer