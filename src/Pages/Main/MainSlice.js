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
    filter: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(getCurrencies.fulfilled, (state, action) => {
      state.coins = action.payload.coins
    })
  },
})

export const selectCoins = state => state.currencies.coins
export const selectCoinsFilter = state => state.currencies.filter

export const { setFilter } = currencies.actions
export default currencies.reducer
