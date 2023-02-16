import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    AddTask: (state, action) => {
      state.value += 1
    },
    DeleteTask: (state) => {
      state.value = state.value - 1
    },
    onToggle: (state) => {
        state.value = state.value - 1
      },
  },
})
export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer