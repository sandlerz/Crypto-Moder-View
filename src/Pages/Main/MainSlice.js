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
  initialState: {},
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCurrencies.fulfilled, (state, action) => {})
  },
})

export default currencies.reducer
