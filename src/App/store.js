import { configureStore } from '@reduxjs/toolkit'
import currencies from '../Pages/Main/MainSlice'
import saveCoins from '../Pages/Save/SaveSlice'

export const store = configureStore({
  reducer: { currencies, saveCoins },
})
