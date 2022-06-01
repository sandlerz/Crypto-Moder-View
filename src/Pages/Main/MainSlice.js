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
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCurrencies.fulfilled, (state, action) => {
      state.coins.concat(action.payload.coins)
    })
  },
})

export const selectCoins = state => state.currencies.coins
export default currencies.reducer
