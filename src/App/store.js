import { configureStore } from '@reduxjs/toolkit'
import currencies from '../Pages/Main/MainSlice'

export const store = configureStore({
  reducer: { currencies },
})
