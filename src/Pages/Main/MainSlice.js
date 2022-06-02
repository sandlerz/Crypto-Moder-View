import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCoins } from '../../Util/Data'

export const getCurrencies = createAsyncThunk(
  'currencies/getCurrencies',
  async () => {
    const response = await getCoins()
    return response
  }
)

const currencies = createSlice({
  name: 'currencies',
  initialState: {
    coins: [],
    high: [],
    low: [],
    trending: [],
    filter: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(getCurrencies.fulfilled, (state, action) => {
      const { coins } = action.payload
      const high = [...coins]
        .sort((a, b) => b.priceChange1d - a.priceChange1d)
        .filter(coin => coin.priceChange1d > 0)
      const trending = [...coins]
        .sort((a, b) => b.priceChange1d - a.priceChange1d)
        .filter(coin => coin.priceChange1d > 5)
      const low = [...coins]
        .sort((a, b) => a.priceChange1d - b.priceChange1d)
        .filter(coin => coin.priceChange1d < 0)
      state.coins = coins
      state.high = high
      state.low = low
      state.trending = trending
    })
  },
})

export const selectCoins = state => state.currencies.coins
export const selectHigh = state => state.currencies.high
export const selectLow = state => state.currencies.low
export const selectTrending = state => state.currencies.trending
export const selectCoinsFilter = state => state.currencies.filter

export const { setFilter } = currencies.actions
export default currencies.reducer
