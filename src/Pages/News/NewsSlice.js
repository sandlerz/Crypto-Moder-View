import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getNews } from '../../Util/Data'

export const getNewsData = createAsyncThunk('news/getNewsData', async () => {
  const response = await getNews()
  return response
})

const news = createSlice({
  name: 'news',
  initialState: {
    news: [],
  },
  extraReducers: builder => {
    builder.addCase(getNewsData.fulfilled, (state, action) => {
      state.news = action.payload.news
    })
  },
})

export const selectNews = state => state.news.news

export default news.reducer
