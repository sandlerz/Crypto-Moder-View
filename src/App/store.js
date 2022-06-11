import { configureStore } from '@reduxjs/toolkit'
import currencies from '../Pages/Main/MainSlice'
import saveCoins from '../Pages/Save/SaveSlice'
import News from '../Pages/News/NewsSlice'

export const store = configureStore({
  reducer: { currencies, saveCoins, News },
})
