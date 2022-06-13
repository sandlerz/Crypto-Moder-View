import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCoins } from '../../Util/Data'

export const getCurrencies = createAsyncThunk(
  'currencies/getCurrencies',
  async limit => {
    const response = await getCoins(limit)
    return response
  }
)

const currencies = createSlice({
  name: 'currencies',
  initialState: {
    coins: [],
    bullishCoins: [],
    bearishCoins: [],
    trending: [],
    filter: '',
    currency: 'USD',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload
    },
    setCurrency: (state, action) => {
      state.currency = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(getCurrencies.fulfilled, (state, action) => {
      const { coins } = action.payload
      const bullishCoins = [...coins]
        .sort((a, b) => b.priceChange1d - a.priceChange1d)
        .filter(coin => coin.priceChange1d > 0)
      const trending = [...coins]
        .sort((a, b) => b.priceChange1d - a.priceChange1d)
        .filter(coin => coin.priceChange1d > 5)
      const bearishCoins = [...coins]
        .sort((a, b) => a.priceChange1d - b.priceChange1d)
        .filter(coin => coin.priceChange1d < 0)
      state.coins = coins
      state.bullishCoins = bullishCoins
      state.bearishCoins = bearishCoins
      state.trending = trending
    })
  },
})

export const selectCoins = state => state.currencies.coins
export const selectBullishCoins = state => state.currencies.bullishCoins
export const selectBearishCoins = state => state.currencies.bearishCoins
export const selectTrending = state => state.currencies.trending
export const selectCoinsFilter = state => state.currencies.filter
export const selectCurrency = state => state.currencies.currency

export const { setFilter, setCurrency } = currencies.actions
export default currencies.reducer
