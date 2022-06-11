import { createSlice } from '@reduxjs/toolkit'

const saveCoins = createSlice({
  name: 'saveCoins',
  initialState: {
    saveCoins: [],
  },
  reducers: {
    addSave(state, action) {
      state.saveCoins.push(action.payload)
    },
    removeSave(state, action) {
      state.saveCoins = state.saveCoins.filter(
        coin => coin.id !== action.payload
      )
    },
  },
})

export const selectSaveCoins = state => state.saveCoins.saveCoins
export const { addSave, removeSave } = saveCoins.actions
export default saveCoins.reducer
