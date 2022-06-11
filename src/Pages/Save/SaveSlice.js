import { createSlice } from '@reduxjs/toolkit'

const saveCoins = createSlice({
  name: 'save',
  initialState: {
    saveCoins: [],
  },
  reducers: {
    addSave: (state, action) => state.saveCoins.concat(action.payload),
    removeSave: (state, actions) =>
      state.saveCoins.filter(coin => coin !== actions.payload),
  },
})

export const selectSaveCoins = state => state.save.saveCoins
export const { addSave } = saveCoins.actions
export default saveCoins.reducer
